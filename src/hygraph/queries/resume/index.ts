import { cleanEnv, str } from "envalid";
import { catchErrors } from "@/hygraph/errors";
import { ResumeDocument, type ResumeQuery } from "@/hygraph/generated/graphql";
import { type QueryFunction } from "@/hygraph/types";
// import { sortByTimeFrame } from "@/utils/date/sort-by-time-frame";

/**
 * Parse the Hygraph resume entry ID environment variable.
 */
const { HYGRAPH_RESUME_ENTRY_ID } = cleanEnv(process.env, {
  HYGRAPH_RESUME_ENTRY_ID: str(),
});

export const getResume: QueryFunction<NonNullable<ResumeQuery["resume"]>> = ({
  client,
}) =>
  catchErrors<NonNullable<ResumeQuery["resume"]>>(async () => {
    const {
      data: { resume },
    } = await client.query({
      query: ResumeDocument,
      variables: {
        id: HYGRAPH_RESUME_ENTRY_ID,
      },
    });

    if (!resume) {
      throw new Error(`Failed to load resume data.`);
    }

    return resume;
  });
