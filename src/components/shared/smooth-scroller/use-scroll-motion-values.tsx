import { useMemo } from "react";
import { type ScrollInstanceMotionValues } from "./types";
import { useScrollInstance } from "./use-scroll-instance";
import { createMotionValue } from "@/components/pages/project/technologies/bubbles/utils/create-motion-value";

// export type ScrollInstanceScrollListener = (
//   position: ScrollInstancePosition
// ) => void;

export const useScrollMotionValues = (
  id: string
  // onScroll?: ScrollInstanceScrollListener
): ScrollInstanceMotionValues => {
  /**
   * Access the scroll instance for the specified ID if it has been created.
   */
  const instance = useScrollInstance(id);

  /**
   * Get the current position motion values from the instance.
   */
  const motionValues = useMemo<ScrollInstanceMotionValues>(
    () =>
      instance?.motionValues ?? {
        x: createMotionValue(0),
        y: createMotionValue(0),
      },
    [instance]
  );

  /**
   * Invoke the scroll listener when the scroll position changes.
   */
  // useEffect(() => {
  //   if (onScroll) {
  //     onScroll(motionValues);
  //   }
  // }, [position, onScroll]);

  return { ...motionValues };
};
