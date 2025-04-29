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
import { type BaseScrollInstance } from "./types";
import { createMotionValue } from "@/components/shared/bubbles/utils/create-motion-value";

interface ScrollProviderProps {
  children: ReactNode;
}

type ScrollInstances = Record<string, BaseScrollInstance | undefined>;

type RegisterScrollInstance = (props: {
  id: string;
  ref: RefObject<HTMLDivElement>;
  disabled?: boolean;
}) => void;

type SetScrollInstancePosition = (
  props: {
    id: string;
  } & Data2d
) => void;

type SetScrollInstanceDisabled = (props: {
  id: string;
  disabled: boolean;
}) => void;

type UnregisterScrollInstance = (id: string) => void;

interface ScrollContextValue {
  instances: ScrollInstances;
  registerInstance: RegisterScrollInstance;
  setInstancePosition: SetScrollInstancePosition;
  setInstanceDisabled: SetScrollInstanceDisabled;
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
    ({ id, ref, disabled = false }) => {
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
                disabled,
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
      }
    },
    [instances]
  );

  /**
   * Set the disabled state for an instance with the specified ID.
   */
  const setInstanceDisabled = useCallback<SetScrollInstanceDisabled>(
    ({ id, disabled }) => {
      setInstances((current) => {
        const instance = current[id];

        if (!instance) {
          throw new Error(
            `No scroll instance with ID "${id}" has been registered.`
          );
        }

        return {
          ...current,
          [id]: {
            ...instance,
            disabled,
          },
        };
      });
    },
    []
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
        setInstanceDisabled,
        unregisterInstance,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
