import React, { type HTMLAttributes, type FunctionComponent } from "react";
import { ResumeSection } from "../components/section";
import { ResumeSectionList } from "../components/section/list";
import {
  ResumeTechnologyDataFragmentDoc,
  type ResumeDataFragment,
} from "@/hygraph/generated/graphql";
import { getFragmentData } from "@/hygraph/generated";
import { parseHygraphDate } from "@/utils/date/parse-hygraph-date";
import { cn } from "@/utils/styling/cn";

interface ResumeTechnicalSkillsSectionProps {
  isDarkMode: boolean;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  technologies: ResumeDataFragment["technologies"];
}

export const ResumeTechnicalSkillsSection: FunctionComponent<
  ResumeTechnicalSkillsSectionProps
> = ({ isDarkMode, className, technologies }) => {
  /**
   * Get the fragment data for the technology entries.
   */
  const technologiesData = getFragmentData(
    ResumeTechnologyDataFragmentDoc,
    technologies
  );

  return (
    <ResumeSection
      isDarkMode={isDarkMode}
      title="Technical Skills"
      className={className}
    >
      <div className="mt-1">
        <ResumeSectionList
          isDarkMode={isDarkMode}
          columns={2}
          small
          items={technologiesData.map(
            ({ name, firstUsed, logo, colors, url }) => {
              /**
               * Throw an error if the light logo is missing.
               */
              if (!logo?.iconLight?.url) {
                throw new Error(`Missing light logo for technology "${name}".`);
              }

              /**
               * Throw an error if the dark logo is missing.
               */
              if (!logo.iconDark?.url) {
                throw new Error(`Missing dark logo for technology "${name}".`);
              }

              return {
                title: name,
                firstUsed: parseHygraphDate(firstUsed),
                icon: {
                  url: logo[isDarkMode ? "iconDark" : "iconLight"]?.url,
                  backgroundColor: colors[
                    isDarkMode ? "backgroundDark" : "backgroundLight"
                  ].hex as string,
                },
                href: url,
              };
            }
          )}
        />
      </div>
      <p
        className={cn(
          isDarkMode ? "text-gray-200" : "text-gray-700", // card-text-primary
          "mt-4",
          "text-[0.625rem] leading-4",
          "text-opacity-30"
        )}
      >
        This selection highlights primary skills, but does not encompass the
        full range of technologies I have utilised.
      </p>
    </ResumeSection>
  );
};
