import { useContext } from "react";
import { CardContext, type CardContextValue } from "./context";

/**
 * Returns whether the card is currently animating.
 */
export const useIsCardAnimating = (): CardContextValue["isAnimating"] =>
  useContext(CardContext).isAnimating;
