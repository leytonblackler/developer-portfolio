import { catchErrors } from "@/hygraph/errors";
import {
  GeneralPageDocument,
  type GeneralPageQuery,
} from "@/hygraph/generated/graphql";
import { type QueryFunction } from "@/hygraph/types";

export const getGeneralPage: QueryFunction<
  NonNullable<GeneralPageQuery["generalPage"]>,
  { id: string }
> = ({ client, variables: { id } }) =>
  catchErrors<NonNullable<GeneralPageQuery["generalPage"]>>(async () => {
    const {
      data: { generalPage },
    } = await client.query({
      query: GeneralPageDocument,
      variables: {
        id,
      },
      context: {
        fetchOptions: {
          next: {
            /**
             * Disable cache in development mode - otherwise use a cache time
             * of 5 minutes seconds.
             */
            revalidate: process.env.VERCEL_ENV === "development" ? 0 : 5 * 60,
          },
        },
      },
    });

    if (!generalPage) {
      throw new Error(`Failed to load data for page ID: ${id}`);
    }

    return generalPage;
  });
