import { type v1 } from "@statsfm/statsfm.js";
import { unstable_cache as unstableCache } from "next/cache";
import { statsfmApi } from "../api";

type GetArtist = (artistId: number) => Promise<v1.Artist>;

export const getArtist: GetArtist = async (artistId) => {
  try {
    const artist = await unstableCache(
      () => statsfmApi.artists.get(artistId),
      [],
      {
        revalidate: false, // Do not cache
      }
    )();
    return artist;
  } catch (error) {
    // TODO: Log error
    console.log(error);
    throw error;
  }
};
