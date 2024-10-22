"use client";

import {
  type FunctionComponent,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useCallback,
  useContext,
  useRef,
} from "react";
import Scrollbar from "smooth-scrollbar";
import {
  type Data2d,
  type ScrollbarOptions,
  type ScrollStatus as SmoothScrollbarScrollStatus,
} from "smooth-scrollbar/interfaces";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import { isMobile } from "react-device-detect";
import { ScrollContext } from "./provider";
import { DisableHorizontalScrollPlugin } from "./disable-horizontal-scroll-plugin";
import { cn } from "@/utils/styling/cn";
import { useRouteListener } from "@/hooks/use-route-listener";
import { ScrollInstanceId } from "@/constants/scroll-instance-ids";

/**
 * Props that the SmoothScroller component accepts.
 */
type SmoothScrollerProps = {
  id: ScrollInstanceId;
  children: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>["className"];
} & Omit<HTMLAttributes<HTMLDivElement>, "id" | "children" | "className">;

/**
 * The type for the listener that handles scroll events.
 */
type OnScrollHandler = (props: SmoothScrollbarScrollStatus | Event) => void;

/**
 * Enable the plugin to disable horizontal scrolling on the smooth scrollbar.
 */
Scrollbar.use(DisableHorizontalScrollPlugin);

/**
 * Enable the overscroll plugin on the smooth scrollbar.
 */
Scrollbar.use(OverscrollPlugin);

/*
 * The configuration for the smooth scrollbar.
 */
const SCROLLBAR_OPTIONS: Partial<ScrollbarOptions> = {
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
};

/**
 * A container enabling smooth scrolling of the content on non-mobile devices.
 */
export const SmoothScroller: FunctionComponent<SmoothScrollerProps> = ({
  id,
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
  const { registerInstance, setInstancePosition, unregisterInstance } =
    useContext(ScrollContext);

  /**
   * Remove the instance when the component unmounts.
   */
  useEffect(() => {
    registerInstance({ id, ref });
    return () => {
      unregisterInstance(id);
    };
  }, [id, registerInstance, unregisterInstance]);

  /**
   * Handle setting the scroll position for the instance.
   */
  const setPosition = useCallback(
    ({ x, y }: Data2d) => {
      setInstancePosition({ id, x, y });
    },
    [id, setInstancePosition]
  );

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
        setPosition(position);
      }
    },
    [setPosition]
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
         * Initialise the smooth scrollbar.
         */
        const scrollbar = Scrollbar.init(element, SCROLLBAR_OPTIONS);

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
  }, [id, onScroll]);

  /**
   * Reset the scroll position when the route changes.
   */
  useRouteListener({
    onChange: () => {
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
    },
  });

  return (
    <div className={cn("h-full max-h-full")}>
      <div
        id={id}
        ref={ref}
        className={cn(
          "h-full max-h-full",
          isMobile
            ? cn("flex flex-col", "overflow-y-auto")
            : cn(
                "[&>.scroll-content]:h-full",
                "[&>.scroll-content]:min-h-full",
                "[&>.scroll-content]:flex",
                "[&>.scroll-content]:flex-col"
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
