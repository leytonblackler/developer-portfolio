"use client";

// import { cookies } from "next/dist/client/components/headers";
import { ColorScheme } from "./types";
import { usePreferredColorSchemeMode } from "./use-preferred-color-scheme-mode";

type UseColorSchemeModeHook = () => ColorScheme;

/**
 * Returns the current color scheme for for the website.
 * Currently this is not configurable within the website and is based
 * directly on the user's preferred color scheme.
 */
export const useColorSchemeMode: UseColorSchemeModeHook = () =>
  usePreferredColorSchemeMode();

// TODO: Set cookie for colour scheme mode
// export const useColorSchemeMode: UseColorSchemeModeHook = () => {
//   const cookieStore = cookies();
//   const cookieValue = cookieStore.get("color-scheme-mode");
//   return isColorScheme(cookieValue) ? cookieValue : "light";
// };

/**
 * Returns whether the current color scheme mode for the website is dark.
 */
export const useIsDarkMode = (): boolean =>
  useColorSchemeMode() === ColorScheme.Dark;

/**
 * Returns whether the current color scheme mode for the website is light.
 */
export const useIsLightMode = (): boolean =>
  useColorSchemeMode() === ColorScheme.Light;
