import {
  type HygraphHexColorValue,
  isHexColorValue,
  type ParsedColorSet,
} from "../types";

/**
 * Parses Hygraph colors from a ColorSet type to allow for accessing the hex
 * codes in string format, since Hygraph declares hex values as "any" by
 * default.
 */
export const parseColorSet = (
  colorSet:
    | {
        backgroundLight: HygraphHexColorValue;
        foregroundLight: HygraphHexColorValue;
        backgroundDark: HygraphHexColorValue;
        foregroundDark: HygraphHexColorValue;
      }
    | null
    | undefined
): ParsedColorSet | null => {
  /**
   * Return null if the color set is null or undefined.
   */
  if (!colorSet) {
    return null;
  }

  /**
   * Deconstruct the HEX codes of the color set as unknown types (rather than
   * any).
   */
  const {
    backgroundLight: { hex: backgroundLightHexColorValue },
    foregroundLight: { hex: foregroundLightHexColorValue },
    backgroundDark: { hex: backgroundDarkHexColorValue },
    foregroundDark: { hex: foregroundDarkHexColorValue },
  } = colorSet as {
    backgroundLight: { hex: unknown };
    foregroundLight: { hex: unknown };
    backgroundDark: { hex: unknown };
    foregroundDark: { hex: unknown };
  };

  /**
   * Return null if any of the HEX codes are invalid.
   */
  if (
    !isHexColorValue(backgroundLightHexColorValue) ||
    !isHexColorValue(foregroundLightHexColorValue) ||
    !isHexColorValue(backgroundDarkHexColorValue) ||
    !isHexColorValue(foregroundDarkHexColorValue)
  ) {
    return null;
  }

  /**
   * Return the parsed color set.
   */
  return {
    light: {
      background: backgroundLightHexColorValue,
      foreground: foregroundLightHexColorValue,
    },
    dark: {
      background: backgroundDarkHexColorValue,
      foreground: foregroundDarkHexColorValue,
    },
  };
};
