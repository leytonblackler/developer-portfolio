"use client";

import { type FunctionComponent, type ReactNode } from "react";
import { useHeroContext } from "./use-hero-context";

interface AfterHeroProps {
  children: ReactNode;
}

export const AfterHero: FunctionComponent<AfterHeroProps> = ({ children }) => {
  const { heroHasEntered } = useHeroContext();
  return heroHasEntered ? children : null;
};
