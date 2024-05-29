import React, { type HTMLAttributes, type FunctionComponent } from "react";
import { ResumeSection } from "../components/section";
import { ResumeSectionList } from "../components/section/list";
import {
  ResumeProjectDataFragmentDoc,
  type ResumeDataFragment,
} from "@/hygraph/generated/graphql";
import { getFragmentData } from "@/hygraph/generated";

interface ResumeProjectsSectionProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  projects: ResumeDataFragment["projects"];
}

export const ResumeProjectsSection: FunctionComponent<
  ResumeProjectsSectionProps
> = ({ className, projects }) => {
  /**
   * Get the fragment data for the project entries.
   */
  const projectsData = getFragmentData(ResumeProjectDataFragmentDoc, projects);

  return (
    <ResumeSection
      title="Projects"
      href="https://leytonblackler.dev/projects"
      className={className}
    >
      <ResumeSectionList
        items={projectsData.map(({ slug, name, timeFrame }) => ({
          title: name,
          href: `https://leytonblackler.dev/projects/${slug}`,
          dateRange: timeFrame,
          content: "TODO",
        }))}
      />
    </ResumeSection>
  );
};
