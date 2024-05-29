import { type Dayjs } from "dayjs";
import { performRequest } from "../utils/perform-request";
import { type Track } from "../types";

type GetLastfmRecentTracksPage = (options: {
  page: number;
  limit: number;
  from?: Dayjs;
  to?: Dayjs;
}) => Promise<Track[]>;

export const getRecentTracksPage: GetLastfmRecentTracksPage = async ({
  limit,
  page,
  from,
  to,
}) => {
  /**
   * Attempt to retrieve the recent tracks for the given page and limit
   */
  const response = await performRequest({
    method: "user.getRecentTracks",
    params: {
      user: "leytonblackler",
      limit,
      page,

      /**
       * Conditionally add the from and to parameters if they are provided.
       */
      ...(from
        ? {
            from: from.unix(),
          }
        : {}),
      ...(to
        ? {
            to: to.unix(),
          }
        : {}),
    },
  });

  /**
   * Parse the response data.
   */
  const data: unknown = await response.json();

  /**
   * Validate that the data is in the expected format.
   */
  if (
    data !== null &&
    typeof data === "object" &&
    "recenttracks" in data &&
    data.recenttracks !== null &&
    typeof data.recenttracks === "object" &&
    "track" in data.recenttracks
  ) {
    console.log(data.recenttracks.track);
  }
  console.log("data", data);

  return [
    {
      id: 123,
      name: "test",
      href: "test",
      thumbnail: "test",
      artists: [],
    },
  ];

  // /**
  //  * Validate that the session key is present in the response.
  //  */
  // if (
  //   "session" in data &&
  //   typeof data.session === "object" &&
  //   "key" in data.session &&
  //   typeof data.session.key === "string"
  // ) {
  //   /**
  //    * Return the key for the created session.
  //    */
  //   return data.session.key;
  // }

  // /**
  //  * Indicate an error in all other cases.
  //  */
  // throw new Error("TODO");
};
