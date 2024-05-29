import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
} from "@material/material-color-utilities";
import { type MD3CConfig, type TailwindColorsDefinition } from "./types";

type GenerateColorsDefinition = (
  md3cConfig: MD3CConfig
) => TailwindColorsDefinition;

export const generateColorsDefinition: GenerateColorsDefinition = (
  md3cConfig
) => {
  console.log("md3cConfig.primary", md3cConfig.primary);

  const theme = themeFromSourceColor(argbFromHex(md3cConfig.primary));

  console.log("primary light", hexFromArgb(theme.schemes.light.surface));

  return { cool: "#ff0000" };
};
