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
        primary: HygraphHexColorValue;
        foreground: HygraphHexColorValue;
        background: HygraphHexColorValue;
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
   * Deconstruct the HEX codes for the primary, background, and text colors
   * from the color set as unknown types (rather than any).
   */
  const {
    primary: { hex: primaryHexColorValue },
    foreground: { hex: foregroundHexColorValue },
    background: { hex: backgroundHexColorValue },
  } = colorSet as {
    primary: { hex: unknown };
    foreground: { hex: unknown };
    background: { hex: unknown };
  };

  /**
   * Return null if any of the HEX codes are invalid.
   */
  if (
    !isHexColorValue(primaryHexColorValue) ||
    !isHexColorValue(foregroundHexColorValue) ||
    !isHexColorValue(backgroundHexColorValue)
  ) {
    return null;
  }

  /**
   * Return the parsed color set.
   */
  return {
    primary: primaryHexColorValue,
    foreground: foregroundHexColorValue,
    background: backgroundHexColorValue,
  };
};
