"use client";

import { type FunctionComponent, type ReactNode } from "react";
import { useIsClient } from "usehooks-ts";
import { useHeroEntryContext } from "./use-hero-context";

interface AfterHeroProps {
  children: ReactNode;
}

export const AfterHero: FunctionComponent<AfterHeroProps> = ({ children }) => {
  const { heroHasEntered } = useHeroEntryContext();
  const isClient = useIsClient();
  return !isClient || heroHasEntered ? children : null;
};
