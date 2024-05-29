import { type FunctionComponent } from "react";
import { type CardListSectionProjectItemDataFragment } from "@/hygraph/generated/graphql";

/**
 * An overlay description for a project card list item indicating whether the
 * project is a personal, professional, or course project.
 */
export const ProjectType: FunctionComponent<
  Pick<
    CardListSectionProjectItemDataFragment,
    "personalProject" | "company" | "courses"
  >
> = ({ personalProject, company, courses }) => {
  /**
   * If the personal project flag has been set, this takes precedence over any
   * connected companies or courses.
   */
  if (personalProject) {
    return "Personal";
  }

  /**
   * If a company has been connected to this project, indicate that this is a
   * professional project.
   */
  if (company) {
    return "Professional";
  }

  /**
   * If courses have been linked to this project, indicate that this is an
   * academic project.
   */
  if (courses.length > 0) {
    return "Academic";
  }

  /**
   * Throw an error if none of the above apply since this is an invalid state.
   */
  throw new Error(
    "Project has not been indicated as personal, but also does not have any connected company or courses."
  );
};
