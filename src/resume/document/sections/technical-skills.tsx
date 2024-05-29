import React, { type HTMLAttributes, type FunctionComponent } from "react";
import { ResumeSection } from "../components/section";
import { ResumeSectionList } from "../components/section/list";
import {
  ResumeTechnologyDataFragmentDoc,
  type ResumeDataFragment,
} from "@/hygraph/generated/graphql";
import { getFragmentData } from "@/hygraph/generated";

interface ResumeTechnicalSkillsSectionProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  technologies: ResumeDataFragment["technologies"];
}

export const ResumeTechnicalSkillsSection: FunctionComponent<
  ResumeTechnicalSkillsSectionProps
> = ({ className, technologies }) => {
  /**
   * Get the fragment data for the technology entries.
   */
  const technologiesData = getFragmentData(
    ResumeTechnologyDataFragmentDoc,
    technologies
  );

  return (
    <ResumeSection title="Technical Skills" className={className}>
      <ResumeSectionList
        items={technologiesData.map(({ name, url }) => ({
          title: name,
          href: url,
          content: "TODO",
        }))}
      />
      {/* <div className="flex flex-col">
      {technologies.map(({ id, name, url }) => (
        <a key={id} href={url}>
          {name}
        </a>
      ))}
    </div> */}
    </ResumeSection>
  );
};
