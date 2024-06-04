import { type FunctionComponent } from "react";
import { Bubbles } from "./bubbles";
import { Card } from "@/components/shared/card";
import {
  ProjectPageTechnologyDataFragmentDoc,
  type ProjectPageDataFragment,
} from "@/hygraph/generated/graphql";
import { getFragmentData } from "@/hygraph/generated";
import { parseColorSet } from "@/hygraph/utils/parse-color-set";

interface TechnologiesCardProps {
  technologies: ProjectPageDataFragment["technologies"];
}

export const TechnologiesCard: FunctionComponent<TechnologiesCardProps> = ({
  technologies,
}) => {
  console.log("technologies", technologies);

  /**
   * Construct the data for the bubble visualisation.
   */
  const bubblesData = technologies.flatMap(({ technology, importance }) => {
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
    const { id, name, logo, colors: unparsedColors } = technologyData;

    /**
     * Parse the HEX color values from the color set.
     */
    const colors = parseColorSet(unparsedColors);

    /**
     * Ignore the item if it the technology does not have an icon set, or the
     * color set could not be parsed.
     */
    if (!logo?.icon || !colors) {
      return [];
    }

    return {
      id,
      label: name,
      iconUrl: logo.icon.url,
      iconIsCircle: logo.iconIsCircle,
      importance,
      backgroundColor: colors.background,
    };
  });

  return (
    <Card
      title="Technologies"
      contentPadding={{
        left: false,
        right: false,
        bottom: false,
      }}
    >
      <div className="relative h-96 w-full">
        <Bubbles data={bubblesData} />
      </div>
    </Card>
  );
};
