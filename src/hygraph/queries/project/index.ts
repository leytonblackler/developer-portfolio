import {
  ProjectPageDataFragmentDoc,
  ProjectPageDocument,
} from "../../generated/graphql";
import { catchErrors } from "@/hygraph/errors";
import { getFragmentData } from "@/hygraph/generated";
import { type ProjectPageDataFragment } from "@/hygraph/generated/graphql";
import { type QueryFunction } from "@/hygraph/types";

export const getProject: QueryFunction<
  ProjectPageDataFragment | null,
  { slug: string }
> = ({ client, variables: { slug } }) =>
  catchErrors<ProjectPageDataFragment | null>(async () => {
    const {
      data: { project },
    } = await client.query({
      query: ProjectPageDocument,
      variables: {
        slug,
      },
    });
    return project
      ? getFragmentData(ProjectPageDataFragmentDoc, project)
      : null;
  });
