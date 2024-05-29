import React, { type HTMLAttributes, type FunctionComponent } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
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
  className?: HTMLAttributes<HTMLDivElement>["className"];
  companies: ResumeDataFragment["companies"];
}

export const ResumeExperienceSection: FunctionComponent<
  ResumeExperienceSectionProps
> = ({ className, companies }) => {
  /**
   * Get the fragment data for the company entries.
   */
  const companiesData = getFragmentData(
    ResumeCompanyDataFragmentDoc,
    companies
  );

  return (
    <ResumeSection
      title="Experience"
      href="https://leytonblackler.dev/experience"
      className={className}
    >
      <ResumeSectionList
        items={companiesData.map(({ slug, name, timeFrame }) => ({
          title: name,
          href: `https://leytonblackler.dev/experience/${slug}`,
          dateRange: timeFrame,
          content: "TODO",
        }))}
      />
    </ResumeSection>
  );
};
