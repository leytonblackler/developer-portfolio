import { AkismetClient } from "akismet-api";
import { cleanEnv, str, url } from "envalid";

/**
 * Parse the environment variables for Akismet API configuration.
 */
const { AKISMET_API_KEY, BASE_URL } = cleanEnv(process.env, {
  AKISMET_API_KEY: str(),
  BASE_URL: url(),
});

/**
 * Initialise the Akismet API client.
 */
export const akismet = new AkismetClient({
  key: AKISMET_API_KEY,
  blog: BASE_URL,
});
