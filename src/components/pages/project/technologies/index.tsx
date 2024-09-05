import { type FunctionComponent } from "react";
import { Bubbles } from "./bubbles";
import { type BubbleData } from "./bubbles/types";
import { Card } from "@/components/shared/card";
import {
  ProjectPageTechnologyDataFragmentDoc,
  type ProjectPageDataFragment,
} from "@/hygraph/generated/graphql";
import { getFragmentData } from "@/hygraph/generated";
import { parseColorSet } from "@/hygraph/utils/parse-color-set";
import { useIsDarkMode } from "@/hooks/color-scheme/use-color-scheme-mode";

interface TechnologiesCardProps {
  technologies: ProjectPageDataFragment["technologies"];
}

export const TechnologiesCard: FunctionComponent<TechnologiesCardProps> = ({
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
        iconUrl: logo[isDarkMode ? "iconLight" : "iconDark"]?.url ?? "", // TODO: Set icons are required in Hygraph
        iconIsCircle: logo.iconIsCircle,
        importance,
        parsedColorSet: parsedTechnologyColorSet,
      };
    }
  );

  return (
    <Card
      title="Technologies"
      contentGap={false}
      contentPadding={{
        left: false,
        right: false,
        bottom: false,
      }}
    >
      <div className="relative h-96 w-full">
        {/* TODO: Activate only when scrolling into viewport */}
        <Bubbles activate data={bubblesData} />
      </div>
    </Card>
  );
};
