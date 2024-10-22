import { type v1 } from "@statsfm/statsfm.js";
import { unstable_cache as unstableCache } from "next/cache";
import { pick } from "lodash";
import { statsfmApi } from "../api";

export type MostRecentlyPlayedTrackData = Pick<
  v1.RecentlyPlayedTrack,
  "track" | "endTime"
>;

type GetMostRecentlyPlayedTrack =
  () => Promise<MostRecentlyPlayedTrackData | null>;

export const getMostRecentlyPlayedTrack: GetMostRecentlyPlayedTrack =
  async () => {
    try {
      const recentlyPlayedTracks = await unstableCache(
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

      /**
       * Return null to indicate the request was successful, but no most
       * recently track was returned from the API - this may occur if the
       * STATSFM_IDENTITY_TOKEN is no longer valid.
       */
      if (recentlyPlayedTracks.length === 0) {
        throw new Error("No recently played tracks returned from stats.fm API");
      }

      /**
       * Get the first track as the most recently played track.
       */
      const [mostRecentlyPlayedTrack] = recentlyPlayedTracks;

      return pick(mostRecentlyPlayedTrack, ["track", "endTime"]);
    } catch (error) {
      // TODO: Log error
      console.log(error);
      throw error;
    }
  };
