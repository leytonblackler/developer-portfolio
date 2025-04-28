import { useContext } from "react";
import { HeaderContext, type HeaderContextValue } from "./context";

export const useHeaderRect = (): HeaderContextValue["headerRect"] =>
  useContext(HeaderContext).headerRect;
