import { type FunctionComponent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { type EducationalInstitutionPageCredentialCourseDataFragment } from "@/hygraph/generated/graphql";
import { IN_VIEW_ANIMATION_PROPS } from "@/constants/in-view-animation-props";
import { cn } from "@/utils/styling/cn";
import { MotionLink } from "@/components/shared/motion-link";

export const CourseTag: FunctionComponent<
  EducationalInstitutionPageCredentialCourseDataFragment
> = ({ name, code, grade, url }) => {
  return (
    <motion.li {...IN_VIEW_ANIMATION_PROPS}>
      <MotionLink
        href={url}
        target="_blank"
        className={cn(
          "block",
          "card-bg-tertiary card-border-tertiary",
          "card-bg-tertiary--hoverable card-border-tertiary--hoverable",
          "transition-colors duration-300",
          "rounded-full",
          "w-fit py-2",
          "pl-3",
          grade ? "pr-0.5" : "pr-3",
          "whitespace-nowrap text-xs leading-none"
        )}
        initial={{
          scale: 1,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <span className={cn("card-text-primary font-medium")}>{code}</span>
        &nbsp;
        <span className={cn("card-text-secondary ml-1 hidden md:inline")}>
          {name}
        </span>
        &nbsp;
        {grade ? (
          <span
            className={cn(
              "card-text-primary",
              "font-medium italic",
              "card-bg-secondary card-border-secondary ml-1.5 rounded-full px-2 py-1"
            )}
          >
            {grade}
          </span>
        ) : null}
      </MotionLink>
    </motion.li>
  );
};
