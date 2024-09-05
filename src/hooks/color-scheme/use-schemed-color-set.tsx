import { type CSSProperties } from "react";
import { type ParsedColorSet } from "@/hygraph/types";

type BackgroundClassNames =
  `bg-[color:rgb(var(${string}))] dark:bg-[color:rgb(var(${string}))]`;

type TextClassNames =
  `text-[color:rgb(var(${string}))] dark:text-[color:rgb(var(${string}))]`;

interface ColorSetClassNames {
  background: BackgroundClassNames;
  text: TextClassNames;
  inverted: {
    background: BackgroundClassNames;
    text: TextClassNames;
  };
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
    "--background-light": parsedColorSet.light.background.rgb,
    "--foreground-light": parsedColorSet.light.foreground.rgb,
    "--background-dark": parsedColorSet.dark.background.rgb,
    "--foreground-dark": parsedColorSet.dark.foreground.rgb,
  } as CSSProperties;

  /**
   * Map the CSS variable names to the color scheme mode.
   */
  const classNames: ColorSetClassNames = {
    background: `bg-[color:rgb(var(--background-light)/var(--tw-bg-opacity))] dark:bg-[color:rgb(var(--background-dark)/var(--tw-bg-opacity))]`,
    text: `text-[color:rgb(var(--foreground-light)/var(--tw-text-opacity))] dark:text-[color:rgb(var(--foreground-dark)/var(--tw-text-opacity))]`,
    inverted: {
      background: `bg-[color:rgb(var(--foreground-light)/var(--tw-bg-opacity))] dark:bg-[color:rgb(var(--foreground-dark)/var(--tw-bg-opacity))]`,
      text: `text-[color:rgb(var(--background-light)/var(--tw-text-opacity))] dark:text-[color:rgb(var(--background-dark)/var(--tw-text-opacity))]`,
    },
  };

  return {
    cssVariableDeclarations,
    classNames,
  };
};
