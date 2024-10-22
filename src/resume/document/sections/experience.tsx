import React, { type HTMLAttributes, type FunctionComponent } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Markdown from "react-markdown";
import { Text } from "@react-pdf/renderer";
import { ResumeSection } from "../components/section";
import { ResumeSectionList } from "../components/section/list";
import { tw } from "../tailwind";
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
              content: (
                <Markdown
                  components={{
                    // eslint-disable-next-line react/no-unstable-nested-components -- This is safe since the document is static and only renders once.
                    p: ({ children }) => (
                      <Text
                        style={{
                          ...tw("leading-relaxed"),
                          ...tw("text-xxs", "font-normal"),
                        }}
                      >
                        {children}
                      </Text>
                    ),
                  }}
                >
                  {description.markdown}
                </Markdown>
              ),
            };
          }
        )}
      />
    </ResumeSection>
  );
};
