import { useContext } from "react";
import { type HeroProviderContextValue } from "./types";
import { context } from "./context";

/**
 * Convenience hook for accessing the context.
 */
export const useHeroContext = (): HeroProviderContextValue =>
  useContext(context);
