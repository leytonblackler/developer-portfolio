"use client";

import { type ColorScheme } from "./types";
import { usePreferredColorSchemeMode } from "./use-preferred-color-scheme-mode";

type UseColorSchemeModeHook = () => ColorScheme;

/**
 * Returns the current color scheme for for the website.
 * Currently this is not configurable within the website and is based
 * directly on the user's preferred color scheme.
 */
export const useColorSchemeMode: UseColorSchemeModeHook = () =>
  usePreferredColorSchemeMode();

/**
 * Returns whether the current color scheme mode for the website is dark.
 */
export const useIsDarkMode = (): boolean => useColorSchemeMode() === "dark";

/**
 * Returns whether the current color scheme mode for the website is light.
 */
export const useIsLightMode = (): boolean => useColorSchemeMode() === "light";
