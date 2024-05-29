import queryString from "query-string";
import { API_KEY, API_URL } from "../constants";
import { generateSignature } from "./generate-signature";

type PerformLastfmRequest = (options: {
  method: string;
  params?: Record<string, string | number>;
}) => Promise<Response>;

export const performRequest: PerformLastfmRequest = async ({
  method,
  params = {},
}) => {
  /**
   * Define the parameters for the request.
   */
  const requestParams = {
    api_key: API_KEY,
    method,
    ...params,
  };

  /**
   * Generate the signature for the request.
   */
  const signature = generateSignature(requestParams);

  /**
   * Attempt the request.
   */
  return fetch(
    queryString.stringifyUrl({
      url: API_URL,
      query: {
        ...requestParams,
        /**
         * Append the signature and required format to the existing request
         * parameters.
         */
        api_sig: signature,
        format: "json",
      },
    })
  );
};
