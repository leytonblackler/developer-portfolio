export const API_URL = "http://ws.audioscrobbler.com/2.0";

/**
 * Ensure that the environment variables for the Last.fm API key and
 * shared secret have been set.
 */
if (!process.env.LASTFM_API_KEY) {
  throw new Error("LASTFM_API_KEY environment variable has not been set");
}
if (!process.env.LASTFM_SHARED_SECRET) {
  throw new Error("LASTFM_SHARED_SECRET environment variable has not been set");
}

/**
 * Deconstruct environment variables and coerce to strings since validation has
 * occurred above.
 */
export const SHARED_SECRET = process.env.LASTFM_SHARED_SECRET;
export const API_KEY = process.env.LASTFM_API_KEY;
