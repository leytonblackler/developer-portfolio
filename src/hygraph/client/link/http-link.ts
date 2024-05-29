import { HttpLink } from "@apollo/client/link/http/index.js";
import { cleanEnv, url } from "envalid";
import fetch from "cross-fetch";

/**
 * Parse the Hygraph API URL environment variable.
 */
const { HYGRAPH_API_URL } = cleanEnv(process.env, {
  HYGRAPH_API_URL: url(),
});

/**
 * Initialise and export the HTTP link with the cross-fetch polyfill and the
 * Hygraph API URL.
 */
export const httpLink = new HttpLink({ fetch, uri: HYGRAPH_API_URL });
