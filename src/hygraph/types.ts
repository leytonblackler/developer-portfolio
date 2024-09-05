import { type ApolloClient } from "@apollo/client";
import { type Color as HygraphColor } from "./generated/graphql";

/**
 * A custom function for querying items from Hygraph.
 */
export type QueryFunction<R = void, V = never> = [V] extends [never]
  ? (props: { client: ApolloClient<unknown>; variables?: never }) => Promise<R>
  : (props: { client: ApolloClient<unknown>; variables: V }) => Promise<R>;

/**
 * A custom function for mutating items in Hygraph.
 */
export type MutationFunction<R, D> = (props: {
  client: ApolloClient<unknown>;
  data: D;
}) => Promise<R>;

/**
 * The HEX color value for the Hygraph Color type.
 * Note that this is "any" by default and requires parsing.
 */
export interface HygraphColorValues {
  hex: HygraphColor["hex"];
  rgba: Pick<HygraphColor["rgba"], "r" | "g" | "b">;
}

/**
 * A string reflecting a hex color value.
 */
type HexColorValue = `#${string}`;

/**
 * Type guard for HexColorValue.
 */
export const isHexColorValue = (
  hexColorValue: unknown
): hexColorValue is HexColorValue =>
  Boolean(hexColorValue) &&
  typeof hexColorValue === "string" &&
  hexColorValue.startsWith("#") &&
  hexColorValue.length >= 2;

/**
 * A string reflecting an RGB color value.
 */
type RGBColorValue = `${string} ${string} ${string}`;

/**
 * Type guard for RGBColorValue.
 */
export const isRGBColorValue = (
  rgbColorValue: unknown
): rgbColorValue is RGBColorValue =>
  Boolean(rgbColorValue) &&
  typeof rgbColorValue === "string" &&
  /^[0-9]{1,3}\s[0-9]{1,3}\s[0-9]{1,3}$/.test(rgbColorValue) &&
  rgbColorValue.split(" ").every((num) => {
    const number = parseInt(num, 10);
    return number >= 0 && number <= 255;
  });

/**
 * A parsed color with hex and RGB values.
 */
interface ColorValues {
  hex: HexColorValue;
  rgb: RGBColorValue;
}

/**
 * Colors from a color set for a particular color scheme mode.
 */
export interface ColorSchemeModeColors {
  foreground: ColorValues;
  background: ColorValues;
}

/**
 * A color set with the hex values for primary, background, and text parsed as
 * strings.
 */
export interface ParsedColorSet {
  light: ColorSchemeModeColors;
  dark: ColorSchemeModeColors;
}
