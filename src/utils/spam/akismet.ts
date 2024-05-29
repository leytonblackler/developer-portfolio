import { AkismetClient } from "akismet-api";

/**
 * Deconstruct required environment variables for Akismet API configuration.
 */
const { AKISMET_API_KEY, SITE_URL } = process.env;

/**
 * Verify that the Akismet API key has been set as an environment variable.
 */
if (!AKISMET_API_KEY) {
  throw new Error("AKISMET_API_KEY environment variable has not been set");
}

/**
 * Verify that the site URL has been set as an environment variable.
 */
if (!SITE_URL) {
  throw new Error("SITE_URL environment variable has not been set");
}

/**
 * Initialise the Akismet API client.
 */
export const akismet = new AkismetClient({
  key: AKISMET_API_KEY,
  blog: SITE_URL,
});
