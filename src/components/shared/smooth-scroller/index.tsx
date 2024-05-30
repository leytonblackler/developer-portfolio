"use client";

import {
  type FunctionComponent,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useCallback,
  useContext,
} from "react";
import Scrollbar from "smooth-scrollbar";
import {
  type Data2d,
  type ScrollListener,
  type ScrollbarOptions,
} from "smooth-scrollbar/interfaces";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import { isMobile } from "react-device-detect";
import { ScrollContext } from "./provider";
import { cn } from "@/utils/styling/cn";

interface SmoothScrollerProps {
  id: string;
  children: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

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
}) => {
  /**
   * Access all scroll instances from the scroll context.
   */
  const { setInstancePosition, removeInstance } = useContext(ScrollContext);

  /**
   * Remove the instance when the component unmounts.
   */
  useEffect(() => {
    return () => {
      removeInstance(id);
    };
  }, [removeInstance, id]);

  /**
   * Handle setting the scroll position for the instance.
   */
  const setPosition = useCallback(
    (newPosition: Data2d) => {
      setInstancePosition({ id, position: newPosition });
    },
    [id, setInstancePosition]
  );

  /**
   * Listener invoked when there are changes to the scroll position.
   */
  const onScroll = useCallback<ScrollListener>(
    ({ offset }) => {
      setPosition(offset);
    },
    [setPosition]
  );

  /**
   * Initialise the smooth scrollbar when the element has been added to the DOM
   * and the device is not mobile.
   */
  useEffect(() => {
    if (!isMobile) {
      if (typeof window !== "undefined") {
        const element = document.getElementById(id);
        if (element) {
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
           * Add a listener for the scroll position.
           */
          scrollbar.addListener(onScroll);

          /**
           * Remove the listener for the scroll position when the component is
           * unmounted.
           */
          return () => {
            scrollbar.removeListener(onScroll);
          };
        }
      }
    }
  }, [id, onScroll]);

  return (
    <div
      id={id}
      className={cn(
        "h-full max-h-full",
        "[&>.scroll-content]:h-full",
        "[&>.scroll-content]:flex",
        "[&>.scroll-content]:flex-col",
        className
      )}
    >
      {children}
    </div>
  );
};
