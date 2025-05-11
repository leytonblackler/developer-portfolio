import { type FunctionComponent } from "react";
import { motion } from "framer-motion";
import Markdown from "react-markdown";
import { CredentialCourses } from "./courses";
import { type EducationalInstitutionPageCredentialDataFragment } from "@/hygraph/generated/graphql";
import { IN_VIEW_ANIMATION_PROPS } from "@/constants/in-view-animation-props";
import { cn } from "@/utils/styling/cn";
import { MarkdownParagraph } from "@/components/shared/markdown/paragraph";

export const Credential: FunctionComponent<
  EducationalInstitutionPageCredentialDataFragment
> = ({ name, code, description, courses }) => {
  return (
    <motion.li
      {...IN_VIEW_ANIMATION_PROPS}
      className={cn(
        "flex flex-col rounded-4xl px-10 pb-10 pt-8",
        "card-bg-secondary",
        "card-border-secondary"
      )}
    >
      <div
        className={cn("card-text-primary", "font-semibold", "text-2xl", "mb-1")}
      >
        <span>{name}</span>
      </div>
      <div
        className={cn(
          "mb-4",
          "text-base",
          "card-text-secondary",
          "opacity-60",
          "font-semibold",
          "whitespace-nowrap",
          "italic"
        )}
      >
        {code}
      </div>
      <div
        className={cn("card-text-secondary", "text-sm leading-loose", "mb-4")}
      >
        <Markdown
          components={{
            p: MarkdownParagraph,
          }}
        >
          {description.markdown}
        </Markdown>
      </div>
      <CredentialCourses courses={courses} />
    </motion.li>
  );
};
