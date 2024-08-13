import { type ExtendedDateStats, Range } from "@statsfm/statsfm.js";
import { unstable_cache as unstableCache } from "next/cache";
import { statsfmApi } from "../api";

type GetStatsForPastSixMonths = () => Promise<ExtendedDateStats>;

export const getStatsForPastSixMonths: GetStatsForPastSixMonths = async () => {
  try {
    return await unstableCache(
      () =>
        statsfmApi.users.stats("leytonblackler", {
          range: Range.MONTHS,
        }),
      [],
      {
        tags: ["cached-stats-for-past-six-months"],
        revalidate: 60 * 60, // 1 hour
      }
    )();
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
