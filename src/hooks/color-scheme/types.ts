export enum ColorScheme {
  Light = "light",
  Dark = "dark",
}

/**
 * Type guard for ColorScheme.
 */
export const isColorScheme = (
  colorScheme: unknown
): colorScheme is ColorScheme =>
  colorScheme !== null &&
  typeof colorScheme === "string" &&
  Object.values(ColorScheme).includes(colorScheme as ColorScheme);
