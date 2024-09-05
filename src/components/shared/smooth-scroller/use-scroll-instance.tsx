import { useContext, useMemo } from "react";
import { ScrollContext } from "./provider";
import { type ScrollInstance } from "./types";

/**
 * Accesses the scroll instance for the specified ID if it has been created.
 */
export const useScrollInstance = (id: string): ScrollInstance | null => {
  /**
   * Access all scroll instances from the scroll context.
   */
  const { instances } = useContext(ScrollContext);

  /**
   * Get the scroll instance for the specified ID if it has been created and
   * return it.
   */
  return useMemo<ScrollInstance | null>(
    () => instances[id] ?? null,
    [id, instances]
  );
};
