import { sortBy } from "lodash";
import md5 from "md5";
import { SHARED_SECRET } from "../constants";

type GenerateSignature = (requestParams: Record<string, string>) => string;

/**
 * Generates the signature for a Last.fm API request.
 * Refer to: https://www.last.fm/api/webauth#_6-sign-your-calls
 */
export const generateSignature: GenerateSignature = (requestParams) =>
  /**
   * Create an MD5 hash from the encoded string
   */
  md5(
    /**
     * Convert the string to be hashed into a utf-8 encoded string.
     */
    Buffer.from(
      /**
       * Sort the request parameters by key alphabetically.
       */
      sortBy(Object.entries(requestParams), ([key]) => key)
        /**
         * Concatenate the sorted request parameters.
         */
        .reduce((output, [key, value]) => output + key + value, "") +
        /**
         * Append the shared secret
         */
        SHARED_SECRET
    )
  ).toString();
