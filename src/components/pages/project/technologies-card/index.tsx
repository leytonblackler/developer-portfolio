import { type FunctionComponent } from "react";
import { TechnologyBubbles } from "./bubbles";
import { Card } from "@/components/shared/card";
import { type ProjectPageDataFragment } from "@/hygraph/generated/graphql";

interface TechnologiesCardProps {
  technologies: ProjectPageDataFragment["technologies"];
}

export const TechnologiesCard: FunctionComponent<TechnologiesCardProps> = ({
  technologies,
}) => {
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
        <TechnologyBubbles technologies={technologies} />
      </div>
    </Card>
  );
};
