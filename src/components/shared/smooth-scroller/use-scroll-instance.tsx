import { useCallback, useContext, useMemo } from "react";
import { type Data2d } from "smooth-scrollbar/interfaces";
import { ScrollContext } from "./provider";
import { type ScrollInstance } from "./types";

/**
 * Accesses the scroll instance for the specified ID if it has been created.
 */
export const useScrollInstance = (id: string): ScrollInstance | null => {
  /**
   * Access all scroll instances from the scroll context.
   */
  const { instances, setInstancePosition, setInstanceDisabled } =
    useContext(ScrollContext);

  /**
   * Sets the position for the instance.
   */
  const setPosition = useCallback(
    (position: Data2d) => {
      setInstancePosition({ id, ...position });
    },
    [id, setInstancePosition]
  );

  /**
   * Sets whether scrolling for the instance is disabled.
   */
  const setDisabled = useCallback(
    (disabled: boolean) => {
      setInstanceDisabled({ id, disabled });
    },
    [id, setInstanceDisabled]
  );

  /**
   * Get the scroll instance for the specified ID if it has been created and
   * return it with the additional updater functions.
   */
  return useMemo<ScrollInstance | null>(() => {
    const baseInstance = instances[id];
    return baseInstance
      ? {
          ...baseInstance,
          setPosition,
          setDisabled,
        }
      : null;
  }, [id, instances, setDisabled, setPosition]);
};
