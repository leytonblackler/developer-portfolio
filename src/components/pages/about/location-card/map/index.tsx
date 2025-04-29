"use client";

import {
  type FunctionComponent,
  type MouseEvent,
  type MouseEventHandler,
  useCallback,
  useMemo,
  useRef,
} from "react";
import {
  type ValueAnimationTransition,
  animate,
  distance2D,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import Mapbox, { type MapRef } from "react-map-gl";
import { useResizeDetector } from "react-resize-detector";
import { computeDestinationPoint } from "geolib";
import { type DebouncedFunc, throttle } from "lodash";
import { HiInformationCircle } from "react-icons/hi";
import { cn } from "@/utils/styling/cn";
import { type Location } from "@/hygraph/generated/graphql";

import "mapbox-gl/dist/mapbox-gl.css";

interface MapProps {
  coordinates: Pick<Location, "latitude" | "longitude">;
}

type AnimateCoordinates = (
  coordinates: Pick<Location, "latitude" | "longitude">,
  animationOptions: ValueAnimationTransition
) => void;

/**
 * This value must be low enough to ensure that all main road layers are
 * visible at all times - it must accommodate the spring animation that
 * causes the value to used to drop below this slightly when animating out.
 */
const DEFAULT_ZOOM = 11.2;
const DEFAULT_PITCH = 0;
const DEFAULT_BEARING = 0;
const MAX_PAN_METERS = 2000;

export const Map: FunctionComponent<MapProps> = ({
  coordinates: centerCoordinates,
}) => {
  /**
   * Ensure that the Mapbox API access token has been set as an environment
   * variable.
   */
  if (!process.env.NEXT_PUBLIC_MAPBOX_API_ACCESS_TOKEN) {
    throw new Error(
      "NEXT_PUBLIC_MAPBOX_API_ACCESS_TOKEN environment variable has not been set"
    );
  }

  // TODO: Dynamically replace color?
  // const style = await fetch(
  //   `https://api.mapbox.com/styles/v1/leytonblackler/cllnbugnx000q01rc263n02kx?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_ACCESS_TOKEN}`
  // );

  const {
    ref: containerRef,
    width: containerWidth,
    height: containerHeight,
  } = useResizeDetector<HTMLDivElement>();

  /**
   * Determine the center of the container element based on its width and
   * height.
   */
  const containerCenter = useMemo<{ x: number; y: number }>(
    () =>
      containerWidth !== undefined && containerHeight !== undefined
        ? { x: containerWidth / 2, y: containerHeight / 2 }
        : { x: 0, y: 0 },
    [containerWidth, containerHeight]
  );

  const mapRef = useRef<MapRef>(null);

  const latitude = useMotionValue(centerCoordinates.latitude);
  const longitude = useMotionValue(centerCoordinates.longitude);
  const zoom = useMotionValue(DEFAULT_ZOOM);
  const pitch = useMotionValue(DEFAULT_PITCH);
  const bearing = useMotionValue(DEFAULT_BEARING);

  useAnimationFrame(() => {
    if (mapRef.current) {
      mapRef.current.setZoom(zoom.get());
      mapRef.current.setPitch(pitch.get());
      mapRef.current.setBearing(bearing.get());
      mapRef.current.panTo(
        {
          lat: latitude.get(),
          lng: longitude.get(),
        },
        { duration: 0 }
      );
    }
  });

  const evaluateCoordinatesForMousePosition = useCallback(
    (
      event: MouseEvent<HTMLDivElement>
    ): {
      latitude: number;
      longitude: number;
    } => {
      if (!containerRef.current) {
        return centerCoordinates;
      }

      const { top, left, bottom, right } =
        containerRef.current.getBoundingClientRect();

      /**
       * Determine the position of the cursor relative to the container.
       */
      const cursorPosition = {
        x: event.clientX - left,
        y: event.clientY - top,
      };

      /**
       * From: https://stackoverflow.com/a/34562590
       */
      const cursorBearing =
        (((Math.atan2(
          containerCenter.x - cursorPosition.x,
          containerCenter.y - cursorPosition.y
        ) *
          (180 / Math.PI)) %
          360) +
          360) %
        360;

      /**
       * From: https://stackoverflow.com/a/61901403
       */
      const relativeBearing = (bearing.get() - cursorBearing + 360) % 360;

      /**
       * Calculate the distance of the cursor from the center of the container.
       */
      const cursorDistanceFromCenter = distance2D(
        containerCenter,
        cursorPosition
      );

      /**
       * Calculate and halve the diagonal distance across the container to
       * determine the maximum distance from the center that the cursor can
       * reach.
       */
      const maxDistance =
        distance2D({ x: left, y: top }, { x: right, y: bottom }) / 2;

      /**
       * Normalize the distance of the cursor from the center of the container
       * as a percentage of the maximum distance from the center.
       */
      const distanceMultipler = cursorDistanceFromCenter / maxDistance;

      const metres = distanceMultipler * MAX_PAN_METERS;

      const destination = computeDestinationPoint(
        centerCoordinates,
        metres,
        relativeBearing
      );

      return destination;
    },
    [centerCoordinates, bearing, containerCenter, containerRef]
  );

  /**
   * Sets the current center position on the map to the given coordinates
   * WITH animations.
   */
  const animateCoordinates = useCallback<AnimateCoordinates>(
    (coordinates, animationOptions) => {
      void animate(latitude, coordinates.latitude, animationOptions);
      void animate(longitude, coordinates.longitude, animationOptions);
    },
    [latitude, longitude]
  );

  /**
   * Throttle animating coordinates to avoid starting an animation too often.
   */
  const throttledAnimateCoordinates = useMemo<
    DebouncedFunc<AnimateCoordinates>
  >(() => throttle(animateCoordinates, 40), [animateCoordinates]);

  const onMouseEnter = useCallback<MouseEventHandler<HTMLDivElement>>(
    (event) => {
      const newCoordinates = evaluateCoordinatesForMousePosition(event);
      throttledAnimateCoordinates(newCoordinates, {
        duration: 0.5,
        ease: "easeOut",
      });

      void animate(zoom, 13, { duration: 0.6 });
      void animate(pitch, 60, { duration: 0.6 });
      void animate(bearing, 360, {
        duration: 30, // 30 seconds for a full rotation
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      });
    },
    [
      throttledAnimateCoordinates,
      evaluateCoordinatesForMousePosition,
      zoom,
      pitch,
      bearing,
    ]
  );

  const onMouseLeave = useCallback<MouseEventHandler<HTMLDivElement>>(() => {
    /**
     * Cancel any existing invocations to the throttled animate coordinates
     * function. This ensure that no cursor related animations will fire after
     * we reset the coordinates back to the initial center coordinates.
     */
    throttledAnimateCoordinates.cancel();

    /**
     * Animate the coordinates back to the initial center coordinates.
     */
    animateCoordinates(centerCoordinates, {
      duration: 1,
      damping: 3,
      ease: "easeOut",
    });

    if (zoom.isAnimating()) {
      zoom.stop();
      zoom.set(zoom.get());
    }
    void animate(zoom, DEFAULT_ZOOM, { duration: 0.8, type: "spring" });

    if (pitch.isAnimating()) {
      pitch.stop();
      pitch.set(pitch.get());
    }
    void animate(pitch, DEFAULT_PITCH, { duration: 0.8, type: "spring" });

    if (bearing.isAnimating()) {
      bearing.stop();
      bearing.set(bearing.get());
    }
    void animate(bearing, DEFAULT_BEARING, { duration: 0.8, type: "spring" });
  }, [
    centerCoordinates,
    animateCoordinates,
    throttledAnimateCoordinates,
    zoom,
    pitch,
    bearing,
  ]);

  /**
   * Handle the mouse move event over the container.
   */
  const onMouseMove = useCallback<MouseEventHandler<HTMLDivElement>>(
    (event) => {
      /**
       * Evaluate the coordinates for the mouse position.
       */
      const newCoordinates = evaluateCoordinatesForMousePosition(event);

      throttledAnimateCoordinates(newCoordinates, {
        duration: 1,
        ease: "easeOut",
      });
    },
    [evaluateCoordinatesForMousePosition, throttledAnimateCoordinates]
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative size-full min-h-80",
        /**
         * Animate the opacity of the Mapbox logo on hover.
         */
        cn(
          "[&_.mapboxgl-control-container]:transition-opacity",
          "[&_.mapboxgl-control-container]:duration-300",
          "[&_.mapboxgl-control-container]:opacity-30",
          "[&_.mapboxgl-control-container:hover]:opacity-100"
        ),
        /**
         * Remove outer margin from generic control container.
         */
        "[&_.mapboxgl-ctrl]:!m-0",
        /**
         * Remove the negative margin from the Mapbox logo.
         */
        "[&_.mapboxgl-ctrl-logo]:!m-0",
        /**
         * Set margin specific to the bottom left control container.
         */
        "[&_.mapboxgl-ctrl-bottom-left]:ml-10",
        "[&_.mapboxgl-ctrl-bottom-left]:mb-4"
      )}
      /**
       * The mouse listeners must be added to the parent div
       * since interaction has been disabled for the map.
       */
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      <Mapbox
        ref={mapRef}
        antialias
        interactive={false}
        /**
         * Show the Mapbox logo in the bottom left corner.
         */
        logoPosition="bottom-left"
        /**
         * Disable the default attribution.
         */
        attributionControl={false}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_ACCESS_TOKEN}
        initialViewState={{
          latitude: latitude.get(),
          longitude: longitude.get(),
          zoom: zoom.get(),
          pitch: pitch.get(),
          bearing: bearing.get(),
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/leytonblackler/cllnbugnx000q01rc263n02kx"
      />
      {/* Disabling default Mapbox attribution requires displaying it manually. */}
      {/* https://docs.mapbox.com/help/getting-started/attribution/#how-attribution-works */}
      <div
        className={cn(
          /**
           * Match the height of the Mapbox logo.
           */
          "size-[23px]",
          "box-border py-0.5",
          "absolute bottom-4 right-10",
          "flex items-center justify-center"
        )}
      >
        {/* TODO: Tooltip */}
        {/* <div className="flex flex-col gap-y-2 whitespace-nowrap">
          {[
            {
              label: "© Mapbox",
              href: "https://www.mapbox.com/about/maps/",
            },
            {
              label: "© OpenStreetMap",
              href: "http://www.openstreetmap.org/about/",
            },
            {
              label: "Improve this map",
              href: `https://www.mapbox.com/map-feedback/#/${centerCoordinates.longitude}/${centerCoordinates.latitude}/${DEFAULT_ZOOM}`,
            },
          ].map(({ label, href }) => (
            <a href={href}>{label}</a>
          ))}
        </div> */}
        <HiInformationCircle
          className={cn(
            "size-full",
            // "text-gray-500",
            /**
             * The Mapbox logo has a fill opacity of 90%, so we must match this
             * for consistency.
             */
            "dark:text-white/90",
            /**
             * Animate the opacity on hover.
             */
            "transition-opacity duration-300",
            "opacity-30 hover:opacity-100"
          )}
        />
      </div>
    </div>
  );
};
