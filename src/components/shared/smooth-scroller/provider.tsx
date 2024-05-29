"use client";

import {
  type FunctionComponent,
  type ReactNode,
  useCallback,
  useState,
  createContext,
} from "react";
import { type Data2d } from "smooth-scrollbar/interfaces";
import { type Entries } from "type-fest";
import { type ScrollInstance } from "./types";

interface ScrollProviderProps {
  children: ReactNode;
}

type ScrollInstances = Record<string, ScrollInstance>;

type SetScrollInstancePosition = (props: {
  id: string;
  position: Data2d;
}) => void;

type RemoveScrollInstance = (id: string) => void;

interface ScrollContextValue {
  instances: ScrollInstances;
  setInstancePosition: SetScrollInstancePosition;
  removeInstance: RemoveScrollInstance;
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
   * The current scroll position.
   */
  const [instances, setInstances] = useState<ScrollInstances>({});

  /**
   * Set the scroll position for an instance with the specified ID.
   */
  const setInstancePosition = useCallback<SetScrollInstancePosition>(
    ({ id, position }) => {
      setInstances((current) => ({ ...current, [id]: { position } }));
    },
    []
  );

  /**
   * Removes a scroll instance.
   */
  const removeInstance = useCallback<RemoveScrollInstance>((id) => {
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
      value={{ instances, setInstancePosition, removeInstance }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
