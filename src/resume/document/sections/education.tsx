import React, { type HTMLAttributes, type FunctionComponent } from "react";
import Markdown from "react-markdown";
import { Text } from "@react-pdf/renderer";
import { ResumeSection } from "../components/section";
import { ResumeSectionList } from "../components/section/list";
import { tw } from "../tailwind";
import {
  ResumeEducationalInstitutionDataFragmentDoc,
  type ResumeDataFragment,
} from "@/hygraph/generated/graphql";
import { getFragmentData } from "@/hygraph/generated";

interface ResumeEducationSectionProps {
  isDarkMode: boolean;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  primaryEducationalInstitution: ResumeDataFragment["primaryEducationalInstitution"];
}

export const ResumeEducationSection: FunctionComponent<
  ResumeEducationSectionProps
> = ({ isDarkMode, className, primaryEducationalInstitution }) => {
  /**
   * Throw an error if the primary educational institution data is missing.
   */
  if (!primaryEducationalInstitution) {
    throw new Error("Primary educational institution data is missing.");
  }

  /**
   * Get the fragment data for the project entries and deconstruct it.
   */
  const { slug, name, logo, colors, timeFrame, credentials } = getFragmentData(
    ResumeEducationalInstitutionDataFragmentDoc,
    primaryEducationalInstitution
  );

  // TODO: Throw error if icons/colors missing in data

  /**
   * Select the first (primary) credential.
   */
  const credential = credentials.length > 0 ? credentials[0] : null;

  /**
   * Throw an error if no credential is found.
   */
  if (!credential) {
    throw new Error("No credential found for primary educational institution.");
  }

  /**
   * Deconstruct the credential code and description.
   */
  const { code, descriptionResume: description } = credential;

  /**
   * Throw an error if the credential description is missing.
   */
  if (!description) {
    throw new Error("Resume description is missing for primary credential.");
  }

  return (
    <ResumeSection
      isDarkMode={isDarkMode}
      title="Education"
      href="https://leytonblackler.dev/education"
      indexHref="https://leytonblackler.dev/education"
      className={className}
    >
      <ResumeSectionList
        isDarkMode={isDarkMode}
        items={[
          {
            title: name,
            icon: {
              url: logo?.iconLight?.url,
              backgroundColor: colors?.backgroundLight.hex as string,
            },
            href: `https://leytonblackler.dev/education/${slug}`,
            tag: code,
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
          },
        ]}
      />
    </ResumeSection>
  );
};
