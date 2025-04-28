import { createContext } from "react";
import { type RectReadOnly } from "react-use-measure";

export interface HeaderContextValue {
  headerRect: RectReadOnly;
}

export const HeaderContext = createContext<HeaderContextValue>(
  {} as HeaderContextValue
);
