import { type FunctionComponent } from "react";
import { motion } from "framer-motion";
import Markdown from "react-markdown";
import { CredentialCourses } from "./courses";
import { CredentialProjects } from "./projects";
import {
  type EducationalInstitutionPageCredentialCourseDataFragment,
  EducationalInstitutionPageCredentialCourseDataFragmentDoc,
  type EducationalInstitutionPageCredentialCourseProjectDataFragment,
  EducationalInstitutionPageCredentialCourseProjectDataFragmentDoc,
  type EducationalInstitutionPageCredentialDataFragment,
} from "@/hygraph/generated/graphql";
import { IN_VIEW_ANIMATION_PROPS } from "@/constants/in-view-animation-props";
import { cn } from "@/utils/styling/cn";
import { MarkdownParagraph } from "@/components/shared/markdown/paragraph";
import { getFragmentData } from "@/hygraph/generated";

export const Credential: FunctionComponent<
  EducationalInstitutionPageCredentialDataFragment
> = ({ name, code, description, courses }) => {
  /**
   * Get the fragment data for each of the courses.
   */
  const coursesData = getFragmentData(
    EducationalInstitutionPageCredentialCourseDataFragmentDoc,
    courses
  );

  /**
   * Flatten the projects across all courses to a single array.
   */
  const projects = coursesData.flatMap((course) => course.projects);

  /**
   * Get the fragment data for each of the project.
   */
  const projectsData = getFragmentData(
    EducationalInstitutionPageCredentialCourseProjectDataFragmentDoc,
    projects
  );

  /**
   * Filter the projects to ensure that each project is unique (in case a
   * single project had been linked to multiple courses).
   */
  const uniqueProjectsData = projectsData.reduce<
    EducationalInstitutionPageCredentialCourseProjectDataFragment[]
  >(
    (filteredProjects, project) =>
      filteredProjects.findIndex(({ id }) => id === project.id) === -1
        ? [...filteredProjects, project]
        : filteredProjects,
    []
  );

  return (
    <motion.li
      {...IN_VIEW_ANIMATION_PROPS}
      className={cn(
        "rounded-4xl px-10 pb-10 pt-8",
        "card-bg-secondary",
        "card-border-secondary",
        "flex flex-col gap-y-6"
      )}
    >
      <div className="flex flex-col">
        <div
          className={cn(
            "card-text-primary",
            "font-semibold",
            "text-2xl",
            "mb-1"
          )}
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
        <div className={cn("card-text-secondary", "text-sm leading-loose")}>
          <Markdown
            components={{
              p: MarkdownParagraph,
            }}
          >
            {description.markdown}
          </Markdown>
        </div>
      </div>
      <CredentialCourses coursesData={coursesData} />
      <CredentialProjects projectsData={uniqueProjectsData} />
    </motion.li>
  );
};
