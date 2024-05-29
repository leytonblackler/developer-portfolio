import { type v1 } from "@statsfm/statsfm.js";
import { statsfmApi } from "../api";

type GetMostRecentlyPlayedTrack = () => Promise<v1.Track>;

export const getMostRecentlyPlayedTrack: GetMostRecentlyPlayedTrack =
  async () => {
    try {
      const [{ track }] = await statsfmApi.users.recentlyStreamed(
        "leytonblackler",
        {
          limit: 1,
        }
      );
      return track;
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };
