export type ColorScheme = "light" | "dark";

/**
 * Type guard for ColorScheme.
 */
export const isColorScheme = (
  colorScheme: unknown
): colorScheme is ColorScheme =>
  colorScheme !== null &&
  typeof colorScheme === "string" &&
  ["light", "dark"].includes(colorScheme);
