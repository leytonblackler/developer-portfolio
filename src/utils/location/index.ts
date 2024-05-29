import queryString from "query-string";
import { type LocationDetails } from "./types/location-details";
import { responseDataIsValid } from "./types/response-data";
import { formatResponseData } from "./utils/format-response-data";
import { type LocationDataFragment } from "@/hygraph/generated/graphql";

const OPEN_WEATHER_MAP_API_URL =
  "https://api.openweathermap.org/data/3.0/onecall";

/**
 * Verify that the OpenWeatherMap API key has been set as an environment
 * variable.
 */
const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;
if (!apiKey) {
  throw new Error(
    "OPEN_WEATHER_MAP_API_KEY environment variable has not been set"
  );
}

type GetLocationDetailsFunction = (
  locationData: LocationDataFragment
) => Promise<LocationDetails>;

/**
 * Get details for a location at a given set of coordinates.
 */
export const getLocationDetails: GetLocationDetailsFunction = async ({
  coordinates: { latitude, longitude },
}) => {
  /**
   * Construct the URL for the OpenWeatherMap API endpoint for the request.
   */
  const endpoint = queryString.stringifyUrl({
    url: OPEN_WEATHER_MAP_API_URL,
    query: {
      appid: apiKey,
      lat: latitude,
      lon: longitude,
      units: "metric",
      lang: "en",
      /**
       * Exclude everything except 'current'.
       */
      exclude: ["minutely", "hourly", "daily", "alerts"].join(","),
    },
  });

  /**
   * Attempt to obtain the weather data from the OpenWeatherMap API.
   */
  // eslint-disable-next-line no-useless-catch -- TODO: Add error handling
  try {
    const response = await fetch(endpoint);

    /**
     * Parse the response body.
     */
    const data: unknown = await response.json();

    /**
     * Throw an error if the request failed.
     */
    if (!response.ok) {
      /**
       * Throw the message from the response body if it exists.
       */
      if (
        data !== null &&
        typeof data === "object" &&
        "message" in data &&
        typeof data.message === "string"
      ) {
        throw new Error(data.message);
      }

      /**
       * If no message then throw a generic error.
       */
      throw new Error("Request to OpenWeatherMap API failed.");
    }

    /**
     * Validate the response body.
     */
    if (!responseDataIsValid(data)) {
      throw new Error(
        "Response from OpenWeatherMap API was in an unexpected format."
      );
    }

    /**
     * Select the information required from the response data.
     */
    return formatResponseData(data);
  } catch (error) {
    // TODO: Handle API error
    throw error;
  }
};
