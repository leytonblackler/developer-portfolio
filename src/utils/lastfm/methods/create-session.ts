import { performRequest } from "../utils/perform-request";

type CreateLastfmSession = (token: string) => Promise<string>;

/**
 * This should only need to be invoked when initially configuring the Last.fm
 *  integration, since the web service session keys have an infinite lifetime
 * by default.
 */
export const createSession: CreateLastfmSession = async (token) => {
  /**
   * Attempt to create a new session.
   */
  const response = await performRequest({
    method: "auth.getSession",
    params: {
      token,
    },
  });

  /**
   * Parse the response data.
   */
  const data: unknown = await response.json();

  /**
   * Validate that the session key is present in the response.
   */
  if (
    data !== null &&
    typeof data === "object" &&
    "session" in data &&
    data.session !== null &&
    typeof data.session === "object" &&
    "key" in data.session &&
    typeof data.session.key === "string"
  ) {
    /**
     * Return the key for the created session.
     */
    return data.session.key;
  }

  /**
   * Indicate an error in all other cases.
   */
  throw new Error(
    "Session key not found in response from the Last.fm getSession method"
  );
};
