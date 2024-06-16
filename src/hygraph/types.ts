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
export type HygraphHexColorValue = HygraphColor["hex"];

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
 * Colors from a color set for a particular color scheme mode.
 */
export interface ColorSchemeModeColors {
  foreground: HexColorValue;
  background: HexColorValue;
}

/**
 * A color set with the hex values for primary, background, and text parsed as
 * strings.
 */
export interface ParsedColorSet {
  light: ColorSchemeModeColors;
  dark: ColorSchemeModeColors;
}
