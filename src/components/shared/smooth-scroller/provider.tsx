"use client";

import {
  type FunctionComponent,
  type ReactNode,
  useCallback,
  useState,
  createContext,
  type RefObject,
} from "react";
import { type Entries } from "type-fest";
import { type Data2d } from "smooth-scrollbar/interfaces";
import { type ScrollInstance } from "./types";
import { createMotionValue } from "@/components/pages/project/technologies/bubbles/utils/create-motion-value";

interface ScrollProviderProps {
  children: ReactNode;
}

type ScrollInstances = Record<string, ScrollInstance | undefined>;

type RegisterScrollInstance = (props: {
  id: string;
  ref: RefObject<HTMLDivElement>;
}) => void;

type SetScrollInstancePosition = (
  props: {
    id: string;
  } & Data2d
) => void;

type UnregisterScrollInstance = (id: string) => void;

interface ScrollContextValue {
  instances: ScrollInstances;
  registerInstance: RegisterScrollInstance;
  setInstancePosition: SetScrollInstancePosition;
  unregisterInstance: UnregisterScrollInstance;
}

export const ScrollContext = createContext<ScrollContextValue>(
  {} as ScrollContextValue
);

/**
 * A provider for scroll containers across the application.
 */
export const ScrollProvider: FunctionComponent<ScrollProviderProps> = ({
  children,
}) => {
  /**
   * The current scroll instances.
   */
  const [instances, setInstances] = useState<ScrollInstances>({});

  /**
   * Register a new scroll instance with the provider.
   */
  const registerInstance = useCallback<RegisterScrollInstance>(
    ({ id, ref }) => {
      setInstances((current) => {
        /**
         * Check if there is already an instance with the specified ID.
         */
        const alreadyRegistered = id in current;

        /**
         * Register the instance only if it has not already been registered.
         */
        return alreadyRegistered
          ? current
          : {
              ...current,
              [id]: {
                ref,
                motionValues: {
                  x: createMotionValue(0),
                  y: createMotionValue(0),
                },
              },
            };
      });
    },
    []
  );

  /**
   * Set the scroll position for an instance with the specified ID.
   */
  const setInstancePosition = useCallback<SetScrollInstancePosition>(
    ({ id, x, y }) => {
      const instance = instances[id];
      if (instance) {
        instance.motionValues.x.set(x);
        instance.motionValues.y.set(y);
      } else {
        throw new Error(
          `No scroll instance with ID "${id}" has been registered.`
        );
        // setInstances((current) => ({
        //   ...current,
        //   [id]: {
        //     element: document.getElementById(id) ?? null,
        //     motionValues: {
        //       x: createMotionValue(x),
        //       y: createMotionValue(y),
        //     },
        //   },
        // }));
      }
    },
    [instances]
  );

  /**
   * Removes a scroll instance.
   */
  const unregisterInstance = useCallback<UnregisterScrollInstance>((id) => {
    setInstances((current) =>
      Object.fromEntries(
        (Object.entries(current) as Entries<typeof current>).filter(
          ([existingId]) => id !== existingId
        )
      )
    );
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        instances,
        registerInstance,
        setInstancePosition,
        unregisterInstance,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
