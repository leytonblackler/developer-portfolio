import { type FunctionComponent } from "react";
import { padStart } from "lodash";
import { type BeliefDataFragment } from "@/hygraph/generated/graphql";
import { cn } from "@/utils/styling/cn";

export const Belief: FunctionComponent<
  BeliefDataFragment & {
    index: number;
  }
> = ({ title, description, index }) => (
  <li
    className={cn(
      "flex flex-col rounded-4xl px-10 pb-10 pt-8",
      "bg-gray-200/50 dark:bg-gray-800/50"
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
    <div className={cn("text-gray-900 dark:text-gray-300", "text-2xl", "mb-4")}>
      <span>{title}</span>
    </div>
    <div
      className={cn(
        "text-gray-700 dark:text-gray-400",
        "text-base leading-relaxed"
      )}
    >
      {description}
    </div>
  </li>
);
