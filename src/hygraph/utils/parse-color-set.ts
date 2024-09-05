import {
  isHexColorValue,
  type ParsedColorSet,
  type HygraphColorValues,
  isRGBColorValue,
} from "../types";

/**
 * Parses Hygraph colors from a ColorSet type to allow for accessing the hex
 * codes in string format, since Hygraph declares hex values as "any" by
 * default.
 */
export const parseColorSet = (
  colorSet:
    | {
        backgroundLight: HygraphColorValues;
        foregroundLight: HygraphColorValues;
        backgroundDark: HygraphColorValues;
        foregroundDark: HygraphColorValues;
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
    backgroundLight: {
      hex: backgroundLightHexColorValue,
      rgba: backgroundLightRGBA,
    },
    foregroundLight: {
      hex: foregroundLightHexColorValue,
      rgba: foregroundLightRGBA,
    },
    backgroundDark: {
      hex: backgroundDarkHexColorValue,
      rgba: backgroundDarkRGBA,
    },
    foregroundDark: {
      hex: foregroundDarkHexColorValue,
      rgba: foregroundDarkRGBA,
    },
  } = colorSet as {
    backgroundLight: {
      hex: unknown;
      rgba: HygraphColorValues["rgba"];
    };
    foregroundLight: {
      hex: unknown;
      rgba: HygraphColorValues["rgba"];
    };
    backgroundDark: {
      hex: unknown;
      rgba: HygraphColorValues["rgba"];
    };
    foregroundDark: {
      hex: unknown;
      rgba: HygraphColorValues["rgba"];
    };
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
   * Attempts to convert a Hygraph RGBA value to an RGB string.
   */
  const constructRGBString = ({
    r,
    g,
    b,
  }: HygraphColorValues["rgba"]): unknown =>
    typeof r === "number" && typeof g === "number" && typeof b === "number"
      ? `${r} ${g} ${b}`
      : null;

  const backgroundLightRGBColorValue = constructRGBString(backgroundLightRGBA);
  const foregroundLightRGBColorValue = constructRGBString(foregroundLightRGBA);
  const backgroundDarkRGBColorValue = constructRGBString(backgroundDarkRGBA);
  const foregroundDarkRGBColorValue = constructRGBString(foregroundDarkRGBA);

  /**
   * Return null if any of the constructed RGB values are invalid.
   */
  if (
    !isRGBColorValue(backgroundLightRGBColorValue) ||
    !isRGBColorValue(foregroundLightRGBColorValue) ||
    !isRGBColorValue(backgroundDarkRGBColorValue) ||
    !isRGBColorValue(foregroundDarkRGBColorValue)
  ) {
    return null;
  }

  /**
   * Return the parsed color set.
   */
  return {
    light: {
      background: {
        hex: backgroundLightHexColorValue,
        rgb: backgroundLightRGBColorValue,
      },
      foreground: {
        hex: foregroundLightHexColorValue,
        rgb: foregroundLightRGBColorValue,
      },
    },
    dark: {
      background: {
        hex: backgroundDarkHexColorValue,
        rgb: backgroundDarkRGBColorValue,
      },
      foreground: {
        hex: foregroundDarkHexColorValue,
        rgb: foregroundDarkRGBColorValue,
      },
    },
  };
};
