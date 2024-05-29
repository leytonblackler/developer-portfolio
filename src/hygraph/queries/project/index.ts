import { catchErrors } from "@/hygraph/errors";
import { getFragmentData } from "@/hygraph/generated";
import {
  type AllProjectFieldsFragment,
  AllProjectFieldsFragmentDoc,
  ProjectQueryDocument,
} from "@/hygraph/generated/graphql";
import { type QueryFunction } from "@/hygraph/types";

export const getProject: QueryFunction<
  AllProjectFieldsFragment | null,
  { slug: string }
> = ({ client, variables: { slug } }) =>
  catchErrors<AllProjectFieldsFragment | null>(async () => {
    const {
      data: { project },
    } = await client.query({
      query: ProjectQueryDocument,
      variables: {
        slug,
      },
    });
    return project
      ? getFragmentData(AllProjectFieldsFragmentDoc, project)
      : null;
  });
