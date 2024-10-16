"use client";

import { useEffect, useState } from "react";
import { ColorScheme } from "./types";

type UsePreferredColorSchemeModeHook = () => ColorScheme;

const isClient = typeof window !== "undefined";

/**
 * Determines whether the user prefers a light or dark color scheme mode based
 * on the prefers-color-scheme CSS media feature
 */
export const usePreferredColorSchemeMode: UsePreferredColorSchemeModeHook =
  () => {
    /**
     * Track the preferred color scheme mode in state.
     */
    const [preferredColorSchemeMode, setPreferredColorSchemeMode] =
      useState<ColorScheme>(
        !isClient || window.matchMedia("(prefers-color-scheme: dark)").matches
          ? ColorScheme.Dark
          : ColorScheme.Light
      );

    /**
     * Listen for changes on the prefers-color-scheme CSS media feature and
     * update the state to reflect the preferred color scheme mode.
     */
    useEffect(() => {
      /**
       * Only add the listener when rendering on the client.
       */
      if (!isClient) {
        return undefined;
      }

      /**
       * Find the media query list for the prefers-color-scheme CSS media.
       */
      const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

      /**
       * Handle changes to the prefers-color-scheme value.
       */
      const onColorSchemePreferenceChange = (
        event: MediaQueryListEvent
      ): void => {
        const colorScheme = event.matches
          ? ColorScheme.Dark
          : ColorScheme.Light;
        setPreferredColorSchemeMode(colorScheme);
      };

      /**
       * Add the event listener.
       */
      mediaQueryList.addEventListener("change", onColorSchemePreferenceChange);

      /**
       * Return a cleanup function to remove the event listener.
       */
      return () => {
        mediaQueryList.removeEventListener(
          "change",
          onColorSchemePreferenceChange
        );
      };
    }, []);

    return preferredColorSchemeMode;
  };

/**
 * Convenience hook for determining if the preferred color scheme mode is dark.
 */
export const usePrefersDarkMode = (): boolean =>
  usePreferredColorSchemeMode() === ColorScheme.Dark;

/**
 * Convenience hook for determining if the preferred color scheme mode is light.
 */
export const usePrefersLightMode = (): boolean =>
  usePreferredColorSchemeMode() === ColorScheme.Light;
