"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ROUTE_CHANGE_ANIMATION_DURATION } from "@/components/page-animation/constants";

type UseRouteListener = (props: {
  onChange: (pathname: string) => void;
  delay?: number;
}) => void;

/**
 * Invokes the provided callback when the route changes.
 */
export const useRouteListener: UseRouteListener = ({
  onChange,
  delay = ROUTE_CHANGE_ANIMATION_DURATION.EXIT,
}) => {
  /**
   * Get the current pathname.
   */
  const pathname = usePathname();

  /**
   * Invoke the callback when the pathname changes after the specified delay.
   */
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(pathname);
      /**
       * Convert the duration to milliseconds.
       */
    }, delay * 1000);

    /**
     * Prevent multiple timeouts coexisting.
     */
    return () => {
      clearTimeout(timeout);
    };
  }, [delay, pathname, onChange]);
};
