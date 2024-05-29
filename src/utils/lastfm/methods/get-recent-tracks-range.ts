import { type Dayjs } from "dayjs";
import { type Track } from "../types";
import { getRecentTracksPage } from "./get-recent-tracks-page";

type GetLastfmRecentTracksRange = (options: {
  from?: Dayjs;
  to?: Dayjs;
}) => Promise<Track[]>;

/**
 * Paginates the request for recent tracks if necessary until all tracks for
 * the date range provided have been obtained.
 */
export const getRecentTracksRange: GetLastfmRecentTracksRange = async ({
  from,
  to,
}) => {
  /**
   * We don't know the total number of pages until the first
   * request has been performed.
   */
  const _totalPages: number | null = null;

  const _recentTracks = await getRecentTracksPage({
    page: 1,
    limit: 200,
    from,
    to,
  });

  // while (totalPages === null || currentPage <= totalPages) {
  //   try {
  //     const recentTracks = await getRecentTracks({
  //       page: currentPage,
  //       limit: 200,
  //       from,
  //     });

  //     console.log("recentTracks", recentTracks);
  //   } catch (error) {
  //     console.log("error");
  //   }
  // }

  return [
    {
      id: 123,
      name: "test",
      href: "test",
      thumbnail: "test",
      artists: [],
    },
  ];
};
