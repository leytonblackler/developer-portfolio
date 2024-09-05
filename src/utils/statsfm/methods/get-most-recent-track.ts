import { type v1 } from "@statsfm/statsfm.js";
import { unstable_cache as unstableCache } from "next/cache";
import { pick } from "lodash";
import { statsfmApi } from "../api";

export type MostRecentlyPlayedTrackData = Pick<
  v1.RecentlyPlayedTrack,
  "track" | "endTime"
>;

type GetMostRecentlyPlayedTrack = () => Promise<MostRecentlyPlayedTrackData>;

export const getMostRecentlyPlayedTrack: GetMostRecentlyPlayedTrack =
  async () => {
    try {
      const [data] = await unstableCache(
        () =>
          statsfmApi.users.recentlyStreamed("leytonblackler", {
            limit: 1,
          }),
        [],
        {
          tags: ["cached-most-recently-played-track"],
          revalidate: 60, // 1 minute
        }
      )();
      return pick(data, ["track", "endTime"]);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };
