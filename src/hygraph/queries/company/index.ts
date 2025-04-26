import { catchErrors } from "@/hygraph/errors";
import { getFragmentData } from "@/hygraph/generated";
import {
  type CompanyPageDataFragment,
  CompanyPageDataFragmentDoc,
  CompanyPageDocument,
} from "@/hygraph/generated/graphql";
import { type QueryFunction } from "@/hygraph/types";

export const getCompany: QueryFunction<
  CompanyPageDataFragment | null,
  { slug: string }
> = ({ client, variables: { slug } }) =>
  catchErrors<CompanyPageDataFragment | null>(async () => {
    const {
      data: { company },
    } = await client.query({
      query: CompanyPageDocument,
      variables: {
        slug,
      },
    });
    return company
      ? getFragmentData(CompanyPageDataFragmentDoc, company)
      : null;
  });
