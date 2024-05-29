import { type FunctionComponent } from "react";
import { Belief } from "./belief";
import {
  type BeliefsSectionDataFragment,
  BeliefDataFragmentDoc,
} from "@/hygraph/generated/graphql";
import { getFragmentData } from "@/hygraph/generated";
import { cn } from "@/utils/styling/cn";
import { Card } from "@/components/shared/card";

export const BeliefsSection: FunctionComponent<BeliefsSectionDataFragment> = ({
  beliefs,
}) => {
  /**
   * Get the fragment data for the belief entries.
   */
  const beliefsData = getFragmentData(BeliefDataFragmentDoc, beliefs);

  return (
    <Card title="Beliefs">
      <ul className={cn("grid grid-cols-1 lg:grid-cols-2", "gap-2")}>
        {beliefsData.map((beliefData, index) => (
          <Belief key={beliefData.id} index={index} {...beliefData} />
        ))}
      </ul>
    </Card>
  );
};
