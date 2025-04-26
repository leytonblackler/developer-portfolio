import { createContext } from "react";

export interface AnimatedPageContextValue {
  isAnimating: boolean;
}

export const AnimatedPageContext = createContext<AnimatedPageContextValue>(
  {} as AnimatedPageContextValue
);