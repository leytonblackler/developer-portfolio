"use client";

import { type FunctionComponent, type ReactNode, useState } from "react";
import { context } from "./context";

/**
 * Deconstruct the provider from the context.
 */
const { Provider } = context;

/**
 * The provider for tracking the entry animation of the hero section.
 */
export const HeroProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  return (
    <Provider
      value={{ heroHasEntered: hasEntered, setHeroHasEntered: setHasEntered }}
    >
      {children}
    </Provider>
  );
};
