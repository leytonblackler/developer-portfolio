import { type FunctionComponent } from "react";
import { padStart } from "lodash";
import { motion } from "framer-motion";
import { type BeliefDataFragment } from "@/hygraph/generated/graphql";
import { cn } from "@/utils/styling/cn";
import { IN_VIEW_MOTION_PROPS } from "@/constants/in-view-motion-props";

export const Belief: FunctionComponent<
  BeliefDataFragment & {
    index: number;
  }
> = ({ title, description, index }) => (
  <motion.li
    {...IN_VIEW_MOTION_PROPS}
    className={cn(
      "flex flex-col rounded-4xl px-10 pb-10 pt-8",
      "card-bg-secondary",
      "card-border-secondary"
    )}
  >
    <div
      className={cn(
        "mb-8",
        "text-lg",
        "text-gray-700 dark:text-gray-400",
        "font-semibold",
        "whitespace-nowrap"
      )}
    >
      {padStart((index + 1).toString(), 2, "0")}
    </div>
    <div
      className={cn("card-text-primary", "font-semibold", "text-2xl", "mb-4")}
    >
      <span>{title}</span>
    </div>
    <div
      className={cn(
        "text-gray-700 dark:text-gray-400",
        "text-sm leading-loose"
      )}
    >
      {description}
    </div>
  </motion.li>
);
