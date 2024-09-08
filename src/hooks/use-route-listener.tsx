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
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      onChange(pathname);
    }, delay * 1000); // Convert seconds to milliseconds
  }, [pathname, onChange, delay]);
};
