/**
 * The shape of the data expected from the OpenWeatherMap API.
 * (Note that other properties may also be included the the response but are
 * not used).
 */
export interface ResponseData {
  /**
   * Geographical coordinates of the location (latitude).
   */
  lat: number;
  /**
   * Geographical coordinates of the location (longitude).
   */
  lon: number;
  /**
   * Timezone name for the requested location.
   */
  timezone: string;
  /**
   * Shift in seconds from UTC.
   */
  timezone_offset: number;
  /**
   * Current weather data.
   */
  current: {
    /**
     * Current time, Unix, UTC.
     */
    dt: number;
    /**
     * Sunrise time, Unix, UTC.
     */
    sunrise: number;
    /**
     * Sunset time, Unix, UTC.
     */
    sunset: number;
    /**
     * Real temperature in Celsius.
     */
    temp: number;
    /**
     * Perceived temperature in Celsius.
     */
    feels_like: number;
    /**
     * Atmospheric pressure on the sea level in hPa.
     */
    pressure: number;
    /**
     * Humidity percentage.
     */
    humidity: number;
    /**
     * Atmospheric temperature in Celsius (varying according to pressure and
     * humidity) below which water droplets begin to condense and dew can form.
     */
    dew_point: number;
    /**
     * Current UV index.
     */
    uvi: number;
    /**
     * Cloudiness percentage.
     */
    clouds: number;
    /**
     * Average visibility in metres.
     */
    visibility: number;
    /**
     * Wind speed in metres per second.
     */
    wind_speed: number;
    /**
     * Wind direction in degrees.
     */
    wind_deg: number;
    /**
     * Weather condition.
     */
    weather: {
      /**
       * Weather condition ID, refer to:
       * https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
       */
      id: number;
      /**
       * Group of weather parameters (Rain, Snow, Extreme etc).
       */
      main: string;
      /**
       * Weather condition within the group, refer to:
       * https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
       * and https://openweathermap.org/weather-conditions#How-to-get-icon-URL
       */
      description: string;
    }[];
  };
}

/**
 * Type guard to ensure that the response data matches the expected shape.
 */
export const responseDataIsValid = (data: unknown): data is ResponseData =>
  data !== null &&
  typeof data === "object" &&
  "lat" in data &&
  typeof data.lat === "number" &&
  "lon" in data &&
  typeof data.lon === "number" &&
  "timezone" in data &&
  typeof data.timezone === "string" &&
  "timezone_offset" in data &&
  typeof data.timezone_offset === "number" &&
  "current" in data &&
  Boolean(data.current) &&
  data.current !== null &&
  typeof data.current === "object" &&
  "dt" in data.current &&
  typeof data.current.dt === "number";
