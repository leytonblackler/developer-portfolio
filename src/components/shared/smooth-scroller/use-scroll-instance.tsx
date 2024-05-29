import { useContext, useMemo } from "react";
import { type Data2d } from "smooth-scrollbar/interfaces";
import { ScrollContext } from "./provider";
import { type ScrollInstance } from "./types";

interface UseScrollInstanceReturn {
  position: Data2d;
}

export const useScrollInstance = (id: string): UseScrollInstanceReturn => {
  /**
   * Access all scroll instances from the scroll context.
   */
  const { instances } = useContext(ScrollContext);

  /**
   * Get the scroll instance for the specified ID if it has been created.
   */
  const instance = useMemo<ScrollInstance | null>(
    () => instances[id] ?? null,
    [id, instances]
  );

  /**
   * Get the current position from the instance.
   */
  const position = useMemo<Data2d>(
    () =>
      instance?.position ?? {
        x: 0,
        y: 0,
      },
    [instance]
  );

  return { position };
};
