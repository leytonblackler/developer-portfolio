import { createContext } from "react";
import { type HeroEntryProviderContextValue } from "./types";

/**
 * Create and export the context.
 */
export const context = createContext<HeroEntryProviderContextValue>(
  {} as HeroEntryProviderContextValue
);
