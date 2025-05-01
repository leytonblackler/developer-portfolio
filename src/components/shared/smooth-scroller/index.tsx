"use client";

import {
  type FunctionComponent,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useCallback,
  useContext,
  useRef,
  useMemo,
  useState,
} from "react";
import Scrollbar from "smooth-scrollbar";
import {
  type Data2d,
  type ScrollbarOptions,
  type ScrollStatus as SmoothScrollbarScrollStatus,
} from "smooth-scrollbar/interfaces";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import { isMobile } from "react-device-detect";
import { type MotionValue } from "framer-motion";
import { useWindowSize } from "usehooks-ts";
import { ScrollContext } from "./provider";
import { DisableHorizontalScrollPlugin } from "./disable-horizontal-scroll-plugin";
import { useScrollMotionValues } from "./use-scroll-motion-values";
import { useScrollInstance } from "./use-scroll-instance";
import { DisableScrollPlugin } from "./disable-scroll-plugin";
import { cn } from "@/utils/styling/cn";
import { useRouteListener } from "@/hooks/use-route-listener";
import { ScrollInstanceId } from "@/constants/scroll-instance-ids";

/**
 * Props that the SmoothScroller component accepts.
 */
type SmoothScrollerProps = {
  id: ScrollInstanceId;
  defaultDisabled?: boolean;
  correctOnWindowResize?: boolean;
  children: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>["className"];
} & Omit<HTMLAttributes<HTMLDivElement>, "id" | "children" | "className">;

/**
 * The type for the listener that handles scroll events.
 */
type OnScrollHandler = (props: SmoothScrollbarScrollStatus | Event) => void;

/**
 * Enable the plugin to disable horizontal scrolling on the smooth scrollbar in
 * all cases.
 */
Scrollbar.use(DisableHorizontalScrollPlugin);

/**
 * Enable the plugin to disable any scrolling on the smooth scrollbar when the
 * option has been set.
 */
Scrollbar.use(DisableScrollPlugin);

/**
 * Enable the overscroll plugin on the smooth scrollbar.
 */
Scrollbar.use(OverscrollPlugin);

/*
 * The configuration for the smooth scrollbar.
 */
const SCROLLBAR_OPTIONS = {
  /**
   * Momentum reduction damping factor, a float value between `(0, 1)`.
   * The lower the value is, the more smooth the scrolling will be (also the
   * more paint frames).
   */
  damping: 0.08,

  /**
   *  Minimal size for scrollbar thumbs.
   */
  thumbMinSize: 20,

  /**
   * Render every frame in integer pixel values, set to `true` to **improve**
   * scrolling performance.
   */
  renderByPixels: true,

  /**
   * Keep scrollbar tracks visible.
   */
  alwaysShowTracks: false,

  /**
   * Set to `true` to allow outer scrollbars continue scrolling when current
   * scrollbar reaches edge.
   */
  continuousScrolling: true,

  /**
   * Options for plugins.
   * Refer to: https://github.com/idiotWu/smooth-scrollbar/blob/develop/docs/plugin.md
   */
  plugins: {
    /**
     * Refer to: https://github.com/idiotWu/smooth-scrollbar/blob/develop/docs/overscroll.md
     */
    overscroll: {
      /**
       * Overscroll effect, 'bounce' for iOS style effect and 'glow' for
       * Android style effect.
       */
      effect: "bounce",

      /**
       * Momentum reduction damping factor, a float value between (0, 1).
       * The lower the value is, the more smooth the over-scrolling will be
       * (also the more paint frames).
       */
      damping: 0.1,

      /**
       * Max-allowed overscroll distance.
       */
      maxOverscroll: 100,
    },
  },
} satisfies Partial<ScrollbarOptions>;

/**
 * Track the last window size in which the scroll position was corrected based
 * on as non-reactive state.
 */
let lastWindowSize: ReturnType<typeof useWindowSize> = {
  width: window.innerWidth,
  height: window.innerHeight,
};

/**
 * A container enabling smooth scrolling of the content on non-mobile devices.
 */
export const SmoothScroller: FunctionComponent<SmoothScrollerProps> = ({
  id,
  defaultDisabled = false,
  correctOnWindowResize = false,
  children,
  className,
  ...props
}) => {
  /**
   * Create a reference to the element for the scroll instance.
   */
  const ref = useRef<HTMLDivElement>(null);

  /**
   * Create a reference to the smooth scrollbar instance.
   */
  const scrollbarRef = useRef<Scrollbar | null>(null);

  /**
   * Access the instance updater functions from the scroll context.
   */
  const { registerInstance, unregisterInstance } = useContext(ScrollContext);

  /**
   * Access the scroll instance once it has been registered.
   */
  const instance = useScrollInstance(id);

  /**
   * Access the motion values for the scroll instance once it has been
   * registered.
   */
  const motionValues = useScrollMotionValues(id);

  /**
   * Remove the instance when the component unmounts.
   */
  useEffect(() => {
    registerInstance({ id, ref, disabled: defaultDisabled });
    return () => {
      unregisterInstance(id);
    };
  }, [id, defaultDisabled, registerInstance, unregisterInstance]);

  /**
   * Watch for changing to the window size.
   */
  const currentWindowSize = useWindowSize();

  /**
   * If the option has been enabled, correct the scroll position when the
   * window is resized.
   *
   * This is particularly important for mobile browsers, where the URL bar can
   * show and hide, and without this enabled, the content of the page can jump
   * erratically as a result.
   */
  useEffect(() => {
    if (correctOnWindowResize) {
      /**
       * Adjust the scroll position by the difference between the last window
       * size and the new window size when the window size changes and the
       * scroll instance has been initialised.
       */
      if (
        ref.current &&
        instance !== null &&
        (lastWindowSize.width !== currentWindowSize.width ||
          lastWindowSize.height !== currentWindowSize.height)
      ) {
        /**
         * Calculate the horizontal and vertical difference.
         */
        const difference = {
          x: lastWindowSize.width - currentWindowSize.width,
          y: lastWindowSize.height - currentWindowSize.height,
        };

        /**
         * Scroll to the new position.
         */
        ref.current.scrollTo(
          instance.motionValues.x.get() - difference.x,
          instance.motionValues.y.get() - difference.y
        );
      }
    }

    /**
     * Set the current window size as the last window size to reference for
     * future changes to the window size.
     */
    lastWindowSize = currentWindowSize;
  }, [correctOnWindowResize, instance, currentWindowSize]);

  /**
   * Update the disabled state on the scrollbar plugin when the instance state
   * changes.
   */
  useEffect(() => {
    /**
     * If the scroll instance has not been registered, or the smooth scroller
     * ref has not yet been set, do not proceed.
     */
    if (!instance || !scrollbarRef.current) {
      return;
    }

    /**
     * Get the current disabled setting from the plugin.
     */
    const pluginDisabled: boolean | null = (() => {
      /**
       * Deconstruct the plugins from the smooth scrollbar.
       */
      const plugins = scrollbarRef.current.options.plugins as unknown;

      /**
       * Validate that the disable scroll setting is present for the plugin and
       * return it.
       */
      if (
        plugins !== null &&
        typeof plugins === "object" &&
        "disableScroll" in plugins &&
        plugins.disableScroll !== null &&
        typeof plugins.disableScroll === "object" &&
        "disabled" in plugins.disableScroll &&
        typeof plugins.disableScroll.disabled === "boolean"
      ) {
        return plugins.disableScroll.disabled;
      }

      /**
       * Otherwise, return null if the current setting could not be determined.
       */
      return null;
    })();

    /**
     * Update the listener for the scroll disable plugin if the current option
     * for the plugin is not the same as the value on the scroll instance.
     */
    if (pluginDisabled !== instance.disabled) {
      scrollbarRef.current.updatePluginOptions("disableScroll", {
        disabled: instance.disabled,
      });
    }
  }, [instance]);

  /**
   * Listener invoked when there are changes to the scroll position.
   */
  const onScroll = useCallback<OnScrollHandler>(
    (onScrollProps) => {
      const position: Data2d | null = (() => {
        /**
         * Handle the event being invoked by the native scroll listener on the
         * element.
         */
        if (onScrollProps instanceof Event) {
          /**
           * Return null if the scroll container element does not exist.
           */
          if (!ref.current) {
            return null;
          }

          /**
           * Construct and return the offset of the scroll container.
           */
          return {
            x: ref.current.scrollLeft,
            y: ref.current.scrollTop,
          };
        }

        /**
         * Otherwise if the event was invoked by the smooth scrollbar instance,
         * use the offset from the smooth scrollbar status to set the position.
         */
        const { offset } = onScrollProps;
        return offset;
      })();

      /**
       * Update the position if it was able to be determined.
       */
      if (position) {
        instance?.setPosition(position);
      }
    },
    [instance]
  );

  /**
   * Handle updating the motion values for the scroll position when
   * overscrolling.
   */
  const onOverscroll = useCallback(
    (overscrollPosition: Data2d) => {
      /**
       * If there is no current element for the smooth scroller set on the ref,
       * do not proceed.
       */
      if (!ref.current) {
        return;
      }

      /**
       * Get the scroll content element.
       */
      const scrollContentElement = ref.current.querySelector(".scroll-content");

      /**
       * If the scroll content element could not be found, do not proceed.
       */
      if (!scrollContentElement) {
        return;
      }

      /**
       * Deconstruct the maximum scrollable width and height of the scroll
       * content excluding overscroll.
       */
      const { scrollWidth, scrollHeight } = scrollContentElement;

      /**
       * Calculates the value to set as the motion value for either the
       * horizontal or vertical dimension.
       */
      const calculateDimension = ({
        overscrollAmount,
        maxScroll,
        motionValue,
      }: {
        overscrollAmount: number;
        maxScroll: number;
        motionValue: MotionValue<number>;
      }): number => {
        /**
         * Get the current value from the motion value.
         */
        const currentValue = motionValue.get();

        /**
         * If the overscroll amount is 0, this indicates that overscrolling has
         * completed from either the left/top or the right/bottom.
         */
        if (overscrollAmount === 0) {
          /**
           * Return the dimension value as either the minimum or maximum
           * scrollable amount for the dimension.
           */
          return currentValue <= 0 ? 0 : maxScroll;
        }
        /**
         * If the overscroll amount is a negative value, it can be set directly
         * (since it would subtracted from the minimum scroll amount of 0).
         */
        return overscrollAmount < 0
          ? overscrollAmount
          : /**
             * Otherwise, the scroll position will be the maximum scroll amount in addition to the amount overscrolled.
             */
            maxScroll + overscrollAmount;
      };

      instance?.setPosition({
        x: calculateDimension({
          overscrollAmount: overscrollPosition.x,
          maxScroll: scrollWidth,
          motionValue: motionValues.x,
        }),
        y: calculateDimension({
          overscrollAmount: overscrollPosition.y,
          maxScroll: scrollHeight,
          motionValue: motionValues.y,
        }),
      });
    },
    [instance, motionValues]
  );

  /**
   * Handle initialisation when the element has been added to the DOM.
   */
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (ref.current) {
        /**
         * Create a reference to the element within this effect, so that it may
         * be referenced in cleanup functions.
         */
        const element = ref.current;

        /**
         *Native scrolling behaviour on mobile devices is typically preferred,
         *so the smooth scroller should not be initialised for mobile.
         */
        if (isMobile) {
          /**
           * Add listeners for both touch move and scrolling.
           */
          element.addEventListener("touchmove", onScroll);
          element.addEventListener("scroll", onScroll);

          /**
           * Remove the listeners when the component is unmounted.
           */
          return () => {
            element.removeEventListener("touchmove", onScroll);
            element.removeEventListener("scroll", onScroll);
          };
        }

        /**
         * Update the constant options to include dynamic properties.
         */
        const scrollbarOptions: Partial<ScrollbarOptions> = {
          ...SCROLLBAR_OPTIONS,
          plugins: {
            ...SCROLLBAR_OPTIONS.plugins,
            /**
             * Set the initial disabled state.
             */
            disableScroll: {
              disabled: defaultDisabled,
            },

            /**
             * Add a listener to the overscroll plugin options to detect when
             * overscrolling is occurring, since this is not reflected by the
             * motion values.
             */
            overscroll: {
              ...SCROLLBAR_OPTIONS.plugins.overscroll,
              onScroll: onOverscroll,
            },
          },
        };

        /**
         * Initialise the smooth scrollbar.
         */
        const scrollbar = Scrollbar.init(element, scrollbarOptions);

        /**
         * Remove the tracks from the DOM.
         */
        scrollbar.track.xAxis.element.remove();
        scrollbar.track.yAxis.element.remove();

        /**
         * Add a scroll listener.
         */
        scrollbar.addListener(onScroll);

        /**
         * Update the listener for the overscroll plugin.
         */
        scrollbar.updatePluginOptions("overscroll", {
          onScroll: onOverscroll,
        });

        /**
         * Store the scrollbar instance in the ref.
         */
        scrollbarRef.current = scrollbar;

        /**
         * Remove the scroll listener when the component is unmounted.
         */
        return () => {
          scrollbar.removeListener(onScroll);
        };
      }
    }
  }, [id, defaultDisabled, onScroll, onOverscroll]);

  /**
   * Reset the scroll position when the route changes.
   */
  const onRouteChange = useCallback(() => {
    /**
     * If the device is mobile, reset the scroll position on the native
     * element itself.
     */
    if (isMobile) {
      if (ref.current) {
        ref.current.scrollTo(0, 0);
      }
    } else if (scrollbarRef.current) {
      /**
       * Otherwise, reset the scroll position via the smooth scrollbar
       * instance.
       */
      scrollbarRef.current.scrollTo(0, 0);
    }
  }, []);

  /**
   * Add the route change listener.
   */
  useRouteListener({ onChange: onRouteChange });

  return (
    <div className={cn("relative h-full max-h-full")}>
      <div
        id={id}
        ref={ref}
        className={cn(
          "h-full max-h-full",
          isMobile
            ? cn("flex flex-col", "overflow-y-auto")
            : cn(
                "[&>.scroll-content]:min-h-full",
                "[&>.scroll-content]:flex",
                "[&>.scroll-content]:flex-col",
                "[&>.scroll-content]:relative"
              ),
          className
        )}
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- Can be removed when the ScrollInstanceId has multiple values
        {...(id === ScrollInstanceId.Main
          ? {
              "data-vaul-drawer-wrapper": true,
            }
          : {})}
        {...props}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};
