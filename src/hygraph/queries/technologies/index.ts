import { catchErrors } from "@/hygraph/errors";
import { getFragmentData } from "@/hygraph/generated";
import {
  type AllTechnologyFieldsFragment,
  TechnologiesQueryDocument,
  AllTechnologyFieldsFragmentDoc,
} from "@/hygraph/generated/graphql";
import { type QueryFunction } from "@/hygraph/types";

export const getTechnologies: QueryFunction<AllTechnologyFieldsFragment[]> = ({
  client,
}) =>
  catchErrors<AllTechnologyFieldsFragment[]>(async () => {
    const {
      data: { technologies },
    } = await client.query({
      query: TechnologiesQueryDocument,
    });
    return technologies.map((technology) =>
      getFragmentData(AllTechnologyFieldsFragmentDoc, technology)
    );
  });
