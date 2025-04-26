import { catchErrors } from "@/hygraph/errors";
import { getFragmentData } from "@/hygraph/generated";
import {
  type EducationalInstitutionPageDataFragment,
  EducationalInstitutionPageDataFragmentDoc,
  EducationalInstitutionPageDocument,
} from "@/hygraph/generated/graphql";
import { type QueryFunction } from "@/hygraph/types";

export const getEducationalInstitution: QueryFunction<
  EducationalInstitutionPageDataFragment | null,
  { slug: string }
> = ({ client, variables: { slug } }) =>
  catchErrors<EducationalInstitutionPageDataFragment | null>(async () => {
    const {
      data: { educationalInstitution },
    } = await client.query({
      query: EducationalInstitutionPageDocument,
      variables: {
        slug,
      },
    });
    return educationalInstitution
      ? getFragmentData(
          EducationalInstitutionPageDataFragmentDoc,
          educationalInstitution
        )
      : null;
  });
