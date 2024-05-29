import { AkismetClient } from "akismet-api";
import { cleanEnv, str } from "envalid";

/**
 * Parse the environment variables for Akismet API configuration.
 */
const { AKISMET_API_KEY, SITE_URL } = cleanEnv(process.env, {
  AKISMET_API_KEY: str(),
  SITE_URL: str(),
});

console.log("SITE_URL", SITE_URL);

/**
 * Initialise the Akismet API client.
 */
export const akismet = new AkismetClient({
  key: AKISMET_API_KEY,
  blog: SITE_URL,
});
