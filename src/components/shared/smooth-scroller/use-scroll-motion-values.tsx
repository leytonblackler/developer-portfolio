import { useRef, useEffect, useMemo, type MutableRefObject } from "react";
import { type ScrollInstanceMotionValues } from "./types";
import { useScrollInstance } from "./use-scroll-instance";
import { createMotionValue } from "@/components/shared/bubbles/utils/create-motion-value";

type ListenerCallback = (value: number) => void;

/**
 * Duration (in ms) to wait after the last motion event before considering it
 * idle.
 */
const IDLE_TIMEOUT_MS = 100;

export const useScrollMotionValues = (
  id: string,
  options?: {
    onStartX?: ListenerCallback;
    onStartY?: ListenerCallback;
    onChangeX?: ListenerCallback;
    onChangeY?: ListenerCallback;
    onIdleX?: ListenerCallback;
    onIdleY?: ListenerCallback;
  }
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
   * Timestamp of the last horizontal scroll motion change.
   */
  const lastXChangeTime = useRef<number | null>(null);

  /**
   * Timestamp of the last vertical scroll motion change.
   */
  const lastYChangeTime = useRef<number | null>(null);

  /**
   * Tracks whether horizontal motion is currently active.
   */
  const isActiveX = useRef(false);

  /**
   * Tracks whether vertical motion is currently active.
   */
  const isActiveY = useRef(false);

  /**
   * Stores the timeout references for detecting idle state per axis.
   */
  const idleTimers = useRef<{
    x?: ReturnType<typeof setTimeout>;
    y?: ReturnType<typeof setTimeout>;
  }>({});

  /**
   * Creates a change handler for a motion value axis that handles
   * activity state and idle detection.
   */
  const createChangeHandler = (
    axis: "x" | "y",
    isActiveRef: MutableRefObject<boolean>,
    lastChangeTimeRef: MutableRefObject<number | null>,
    motionOptions?: {
      onStart?: ListenerCallback;
      onChange?: ListenerCallback;
      onIdle?: ListenerCallback;
    }
  ): ListenerCallback => {
    return (value) => {
      /**
       * Get the current timestamp.
       */
      const now = Date.now();

      /**
       * If not currently active, trigger onStart and mark as active.
       */
      if (!isActiveRef.current) {
        isActiveRef.current = true;
        motionOptions?.onStart?.(value);
      }

      /**
       * Update the time of the last change.
       */
      lastChangeTimeRef.current = now;

      /**
       * Clear any existing idle timeout for this axis.
       */
      if (idleTimers.current[axis]) clearTimeout(idleTimers.current[axis]);

      /**
       * Set a new idle timeout to determine when scrolling has stopped.
       */
      idleTimers.current[axis] = setTimeout(() => {
        if (
          lastChangeTimeRef.current &&
          Date.now() - lastChangeTimeRef.current >= IDLE_TIMEOUT_MS
        ) {
          /**
           * Mark as inactive and trigger onIdle if defined.
           */
          isActiveRef.current = false;
          motionOptions?.onIdle?.(value);
        }
      }, IDLE_TIMEOUT_MS);

      /**
       * Trigger the onChange callback if defined.
       */
      motionOptions?.onChange?.(value);
    };
  };

  /**
   * Memoized change handler for the horizontal motion value.
   */
  const changeHandlerX = useMemo(
    () =>
      createChangeHandler("x", isActiveX, lastXChangeTime, {
        onStart: options?.onStartX,
        onChange: options?.onChangeX,
        onIdle: options?.onIdleX,
      }),
    [options]
  );

  /**
   * Memoized change handler for the vertical motion value.
   */
  const changeHandlerY = useMemo(
    () =>
      createChangeHandler("y", isActiveY, lastYChangeTime, {
        onStart: options?.onStartY,
        onChange: options?.onChangeY,
        onIdle: options?.onIdleY,
      }),
    [options]
  );

  /**
   * Add listeners for changes to the motion values.
   */
  useEffect(() => {
    const listenerRemovalCallbacks = [
      motionValues.x.on("change", changeHandlerX),
      motionValues.y.on("change", changeHandlerY),
    ];
    return () => {
      listenerRemovalCallbacks.forEach((removeListener) => {
        removeListener();
      });
    };
  }, [motionValues.x, motionValues.y, changeHandlerX, changeHandlerY]);

  return { ...motionValues };
};
