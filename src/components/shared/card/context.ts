import { createContext } from "react";

export interface CardContextValue {
  isAnimating: boolean;
}

export const CardContext = createContext<CardContextValue>(
  {} as CardContextValue
);