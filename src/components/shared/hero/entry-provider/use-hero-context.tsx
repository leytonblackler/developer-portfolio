import { useContext } from "react";
import { type HeroEntryProviderContextValue } from "./types";
import { context } from "./context";

/**
 * Convenience hook for accessing the context.
 */
export const useHeroEntryContext = (): HeroEntryProviderContextValue =>
  useContext(context);
