import React, { type HTMLAttributes, type FunctionComponent } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Markdown from "react-markdown";
import { ResumeSection } from "../components/section";
import { ResumeSectionList } from "../components/section/list";
import {
  ResumeCompanyDataFragmentDoc,
  type ResumeDataFragment,
} from "@/hygraph/generated/graphql";
import { getFragmentData } from "@/hygraph/generated";

// TODO: Refactor to util file
dayjs.extend(utc);
dayjs.extend(timezone);

interface ResumeExperienceSectionProps {
  isDarkMode: boolean;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  companies: ResumeDataFragment["companies"];
}

export const ResumeExperienceSection: FunctionComponent<
  ResumeExperienceSectionProps
> = ({ isDarkMode, className, companies }) => {
  /**
   * Get the fragment data for the company entries.
   */
  const companiesData = getFragmentData(
    ResumeCompanyDataFragmentDoc,
    companies
  );

  // TODO: Throw error if icons/colors missing in companies data

  return (
    <ResumeSection
      isDarkMode={isDarkMode}
      title="Experience"
      href="https://leytonblackler.dev/experience"
      indexHref="https://leytonblackler.dev/experience"
      className={className}
    >
      <ResumeSectionList
        isDarkMode={isDarkMode}
        items={companiesData.map(
          ({
            slug,
            name,
            descriptionResume: description,
            logo,
            colors,
            timeFrame,
          }) => {
            /**
             * Throw an error if the description is missing.
             */
            if (!description) {
              throw new Error("Resume description is missing for company.");
            }

            return {
              title: name,
              icon: {
                url: logo?.iconLight?.url,
                backgroundColor: colors?.backgroundLight.hex as string,
              },
              href: `https://leytonblackler.dev/experience/${slug}`,
              dateRange: timeFrame,
              content: <Markdown>{description.markdown}</Markdown>,
            };
          }
        )}
      />
    </ResumeSection>
  );
};
