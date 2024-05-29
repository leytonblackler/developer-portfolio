import { catchErrors } from "@/hygraph/errors";
import { getFragmentData } from "@/hygraph/generated";
import {
  AllProjectSummariesQueryDocument,
  type ProjectSummaryFieldsFragment,
  ProjectSummaryFieldsFragmentDoc,
} from "@/hygraph/generated/graphql";
import { type QueryFunction } from "@/hygraph/types";

export const getAllProjectSummaries: QueryFunction<
  ProjectSummaryFieldsFragment[]
> = ({ client }) =>
  catchErrors<ProjectSummaryFieldsFragment[]>(async () => {
    const {
      data: { projects },
    } = await client.query({
      query: AllProjectSummariesQueryDocument,
    });
    return projects.map((project) =>
      getFragmentData(ProjectSummaryFieldsFragmentDoc, project)
    );
  });
