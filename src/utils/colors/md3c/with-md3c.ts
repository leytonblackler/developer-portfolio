import _ from "lodash";
import { type MD3CConfig, type TailwindConfig } from "./types";
import { generateColorsDefinition } from "./generate-colors-definition";

type MD3CTailwindConfigTransformer = (
  md3cConfig: MD3CConfig,
  tailwindConfig: TailwindConfig
) => TailwindConfig;

export const withMD3C: MD3CTailwindConfigTransformer = (
  md3cConfig,
  tailwindConfig
) => {
  /**
   * Generate the Tailwind colors definition from the MD3C config..
   */
  const colorsDefinition = generateColorsDefinition(md3cConfig);

  console.log("generated:", colorsDefinition);

  /**
   * Create the new config object.
   */
  let transformedConfig = { ...tailwindConfig };

  /**
   * Extend the colors definition on the provided Tailwind config with the
   * generated colors definition, merging if necessary.
   */
  transformedConfig = _.set(transformedConfig, "theme.extend.colors", {
    ...(tailwindConfig.theme?.extend?.colors ?? {}),
    ...colorsDefinition,
  });

  /**
   * Return the transformed config.
   */
  return transformedConfig;
};
