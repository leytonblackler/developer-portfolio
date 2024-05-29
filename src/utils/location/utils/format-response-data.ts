import camelcaseKeys from "camelcase-keys";
import { type LocationDetails } from "../types/location-details";
import { type ResponseData } from "../types/response-data";

/**
 * Format the response data from the OpenWeatherMap API into a more convenient
 * structure.
 */
export const formatResponseData = (
  responseData: ResponseData
): LocationDetails => {
  /**
   * Convert the keys of the response data to camel case.
   */
  const camelcaseResponseData = camelcaseKeys(responseData, { deep: true });

  /**
   * Deconstruct the required data.
   */
  const {
    timezone,
    current: {
      sunrise: sunriseTimestamp,
      sunset: sunsetTimestamp,
      weather: conditions,
    },
  } = camelcaseResponseData;

  /**
   * Multiple weather conditions may be returned, but the first one will always
   * be the primary weather condition.
   */
  const primaryCondition = conditions[0];
  const { id: code, description } = primaryCondition;

  return {
    time: {
      timezone,
      sunriseTimestamp,
      sunsetTimestamp,
    },
    weather: {
      code,
      description,
    },
  };
};
