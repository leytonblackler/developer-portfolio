import { type v1 } from "@statsfm/statsfm.js";
import { unstable_cache as unstableCache } from "next/cache";
import { statsfmApi } from "../api";

type GetMostRecentlyPlayedTrack = () => Promise<v1.Track>;

export const getMostRecentlyPlayedTrack: GetMostRecentlyPlayedTrack =
  async () => {
    try {
      const [{ track }] = await unstableCache(
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
      return track;
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };
