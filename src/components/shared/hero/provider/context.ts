import { createContext } from "react";
import { type HeroProviderContextValue } from "./types";

/**
 * Create and export the context.
 */
export const context = createContext<HeroProviderContextValue>(
  {} as HeroProviderContextValue
);
