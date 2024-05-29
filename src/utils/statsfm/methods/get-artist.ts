import { type v1 } from "@statsfm/statsfm.js";
import { statsfmApi } from "../api";

type GetArtist = (artistId: number) => Promise<v1.Artist>;

export const getArtist: GetArtist = async (artistId) => {
  try {
    const artist = await statsfmApi.artists.get(artistId);
    return artist;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
