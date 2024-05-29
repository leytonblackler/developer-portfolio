import { type Dayjs } from "dayjs";
import { type LastfmSummary, type Track } from "../types";
import { getRecentTracksRange } from "./get-recent-tracks-range";

type GetLastfmSummary = (options: { from: Dayjs }) => Promise<LastfmSummary>;

export const getSummary: GetLastfmSummary = async ({ from }) => {
  // const currentPage = 1;
  // const minutesListened = 0;
  // const uniqueTracks = 0;
  // const uniqueArtists = 0;
  const mostRecentTrack: Track | null = null;

  const _tracks = await getRecentTracksRange({
    from,
  });

  return {
    mostRecentTrack,
    stats: {
      minutesListened: 0,
      uniqueTracks: 0,
      uniqueArtists: 0,
    },
  };
};
