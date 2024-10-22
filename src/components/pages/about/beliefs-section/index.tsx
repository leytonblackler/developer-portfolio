"use client";

import { type FunctionComponent } from "react";
import { motion } from "framer-motion";
import { Belief } from "./belief";
import {
  type BeliefsSectionDataFragment,
  BeliefDataFragmentDoc,
} from "@/hygraph/generated/graphql";
import { getFragmentData } from "@/hygraph/generated";
import { cn } from "@/utils/styling/cn";
import { Card } from "@/components/shared/card";
import { useInView } from "@/components/shared/smooth-scroller/use-in-view";

export const BeliefsSection: FunctionComponent<BeliefsSectionDataFragment> = ({
  beliefs,
}) => {
  /**
   * Get the fragment data for the belief entries.
   */
  const beliefsData = getFragmentData(BeliefDataFragmentDoc, beliefs);

  /**
   * Observe when the card first enters the viewport.
   */
  const [ref, isInView] = useInView<HTMLUListElement>();

  return (
    <Card
      title="My beliefs"
      contentClassName={cn("px-4 pb-4")}
      contentPadding={{ left: false, right: false, bottom: false }}
    >
      <motion.ul
        ref={ref}
        animate={isInView ? "visible" : "hidden"}
        transition={{
          delayChildren: 0.3,
          staggerChildren: 0.2,
        }}
        className={cn("grid grid-cols-1 lg:grid-cols-2", "gap-2")}
      >
        {beliefsData.map((beliefData, index) => (
          <Belief key={beliefData.id} index={index} {...beliefData} />
        ))}
      </motion.ul>
    </Card>
  );
};
