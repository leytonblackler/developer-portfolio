import { useContext } from "react";
import { AnimatedPageContext, type AnimatedPageContextValue } from "./context";

/**
 * Returns whether the page is currently animating.
 */
export const useIsPageAnimating = (): AnimatedPageContextValue["isAnimating"] =>
  useContext(AnimatedPageContext).isAnimating;
