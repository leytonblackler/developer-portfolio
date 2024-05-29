import { Api } from "@statsfm/statsfm.js";

const API_URL = "https://beta-api.stats.fm/api";

/**
 * Ensure that the stats.fm identity token has been set as an environment
 * variable.
 */
if (!process.env.STATSFM_IDENTITY_TOKEN) {
  throw new Error(
    "STATSFM_IDENTITY_TOKEN environment variable has not been set"
  );
}

export const statsfmApi = new Api({
  http: {
    apiUrl: API_URL,
    retries: 0,
    version: "1",
  },
  auth: {
    accessToken: process.env.STATSFM_IDENTITY_TOKEN,
  },
});
