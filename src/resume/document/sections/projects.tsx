import React, { type HTMLAttributes, type FunctionComponent } from "react";
import Markdown from "react-markdown";
import { Text } from "@react-pdf/renderer";
import { ResumeSection } from "../components/section";
import { ResumeSectionList } from "../components/section/list";
import { tw } from "../tailwind";
import {
  ResumeProjectDataFragmentDoc,
  type ResumeDataFragment,
} from "@/hygraph/generated/graphql";
import { getFragmentData } from "@/hygraph/generated";
import { ProjectCategory } from "@/components/shared/card-list/project-category";

interface ResumeProjectsSectionProps {
  isDarkMode: boolean;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  projects: ResumeDataFragment["projects"];
}

export const ResumeProjectsSection: FunctionComponent<
  ResumeProjectsSectionProps
> = ({ isDarkMode, className, projects }) => {
  /**
   * Get the fragment data for the project entries.
   */
  const projectsData = getFragmentData(ResumeProjectDataFragmentDoc, projects);

  // TODO: Throw error if icons/colors missing in projects data

  return (
    <ResumeSection
      isDarkMode={isDarkMode}
      title="Projects"
      href="https://leytonblackler.dev/projects"
      indexHref="https://leytonblackler.dev/projects"
      className={className}
    >
      <ResumeSectionList
        isDarkMode={isDarkMode}
        items={projectsData.map(
          ({
            slug,
            name,
            descriptionResume: description,
            logo,
            colors,
            personalProject,
            company,
            courses,
            timeFrame,
          }) => {
            /**
             * Throw an error if the description is missing.
             */
            if (!description) {
              throw new Error(
                `Resume description is missing for project "${name}".`
              );
            }

            return {
              title: name,
              icon: {
                url: logo?.iconLight?.url,
                backgroundColor: colors?.backgroundLight.hex as string,
              },
              href: `https://leytonblackler.dev/projects/${slug}`,
              tag: (
                <ProjectCategory
                  personalProject={personalProject}
                  company={company}
                  courses={courses}
                />
              ),
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
