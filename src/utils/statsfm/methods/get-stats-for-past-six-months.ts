import { type ExtendedDateStats, Range } from "@statsfm/statsfm.js";
import { statsfmApi } from "../api";

type GetStatsForPastSixMonths = () => Promise<ExtendedDateStats>;

export const getStatsForPastSixMonths: GetStatsForPastSixMonths = async () => {
  try {
    return await statsfmApi.users.stats("leytonblackler", {
      range: Range.MONTHS,
    });
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
