import {
  type RecursiveKeyValuePair,
  type ResolvableTo,
} from "tailwindcss/types/config";
import { type DefaultColors } from "tailwindcss/types/generated/colors";

export type TailwindColorsDefinition = ResolvableTo<RecursiveKeyValuePair>;

export type AdditionalColorKeys = keyof Omit<
  DefaultColors,
  "inherit" | "current" | "transparent" | "black" | "white"
>;

export interface MD3CConfig {
  primary: string;
  additional: AdditionalColorKeys[];
  safelist: boolean;
}

export type { Config as TailwindConfig } from "tailwindcss/types/config";
