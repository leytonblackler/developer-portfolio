import { type CSSProperties } from "react";
import { type ParsedColorSet } from "@/hygraph/types";

interface ColorSetClassNames {
  // background: `bg-[color:var(${string})] dark:bg-[color:var(${string})]`;
  background: string;
  text: `text-[color:var(${string})] dark:text-[color:var(${string})]`;
}

export type SchemedColorSet = {
  cssVariableDeclarations: CSSProperties;
  classNames: ColorSetClassNames;
} | null;

export const useSchemedColorSet = (
  parsedColorSet: ParsedColorSet | null | undefined
): SchemedColorSet => {
  /**
   * Return null if no parsed color set has been provided.
   */
  if (!parsedColorSet) {
    return null;
  }

  /**
   * Define the style object to be applied to the container where the CSS
   * variables will be scoped to.
   */
  const cssVariableDeclarations: CSSProperties = {
    "--background-light": parsedColorSet.light.background,
    "--foreground-light": parsedColorSet.light.foreground,
    "--background-dark": parsedColorSet.dark.background,
    "--foreground-dark": parsedColorSet.dark.foreground,
  } as React.CSSProperties;

  /**
   * Map the CSS variable names to the color scheme mode.
   */
  const classNames: ColorSetClassNames = {
    background: `bg-[color:var(--background-light)] dark:bg-[color:var(--background-dark)]`,
    text: `text-[color:var(--foreground-light)] dark:text-[color:var(--foreground-dark)]`,
  };

  return {
    cssVariableDeclarations,
    classNames,
  };
};
