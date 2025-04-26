"use client";

import { type FunctionComponent } from "react";
import {
  ProjectPageTechnologyDataFragmentDoc,
  type ProjectPageDataFragment,
} from "@/hygraph/generated/graphql";
import { useIsDarkMode } from "@/hooks/color-scheme/use-color-scheme-mode";
import { type BubbleData } from "@/components/shared/bubbles/types";
import { getFragmentData } from "@/hygraph/generated";
import { parseColorSet } from "@/hygraph/utils/parse-color-set";
import { Bubbles } from "@/components/shared/bubbles";

interface TechnologyBubblesProps {
  technologies: ProjectPageDataFragment["technologies"];
}

export const TechnologyBubbles: FunctionComponent<TechnologyBubblesProps> = ({
  technologies,
}) => {
  /**
   * Get whether the current color scheme mode is dark.
   */
  const isDarkMode = useIsDarkMode();

  /**
   * Construct the data for the bubble visualisation.
   */
  const bubblesData: BubbleData[] = technologies.flatMap(
    ({ technology, importance }) => {
      /**
       * Get the fragment data for the technology.
       */
      const technologyData = getFragmentData(
        ProjectPageTechnologyDataFragmentDoc,
        technology
      );

      /**
       * Ignore the item if it the technology has not been specified.
       */
      if (!technologyData) {
        return [];
      }

      /**
       * Deconstruct the required properties from the technology fragment data.
       */
      const { id, name, url, logo, colors: unparsedColors } = technologyData;

      /**
       * Parse the HEX color values from the color set.
       */
      const parsedTechnologyColorSet = parseColorSet(unparsedColors);

      /**
       * Ignore the item if it the technology does not have both a light and
       * dark icon, or the color set could not be parsed.
       */
      if (!logo?.iconLight || !logo.iconDark || !parsedTechnologyColorSet) {
        return [];
      }

      return {
        id,
        label: name,
        href: url,
        iconUrl: logo[isDarkMode ? "iconLight" : "iconDark"]?.url ?? "", // TODO: Set icons as required in Hygraph
        iconIsCircle: logo.iconIsCircle,
        importance,
        parsedColorSet: parsedTechnologyColorSet,
      };
    }
  );

  //  TODO: Activate only when scrolling into viewport
  return <Bubbles activate data={bubblesData} />;
};
