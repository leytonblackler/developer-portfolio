import dayjs from "dayjs";
import { iconMapping } from "./icon-mapping";
import { type LocationDetails } from "@/utils/location/types/location-details";
import { type ReactIcon } from "@/utils/icons/types";

type GetWeatherIconFunction = (locationDetails: LocationDetails) => ReactIcon;

export const getWeatherIcon: GetWeatherIconFunction = ({
  time: { timezone, sunriseTimestamp, sunsetTimestamp },
  weather: { code },
}) => {
  /**
   * Get the current time for the timezone.
   */
  const currentTime = dayjs().tz(timezone);

  /**
   * Parse the unix timestamps for sunrise and sunset into Dayjs objects
   * for the timezone.
   */
  const sunrise = dayjs.unix(sunriseTimestamp).tz(timezone);
  const sunset = dayjs.unix(sunsetTimestamp).tz(timezone);

  /**
   * Determine if it is currently daytime or nighttime for the timezone.
   */
  const isDaytime =
    currentTime.isAfter(sunrise) && currentTime.isBefore(sunset);

  /**
   * Attempt to find an icon mapping for the current weather condition code
   * based on the code range points defined in the mapping.
   */
  const rangePoints = Object.keys(iconMapping).map((key) => parseInt(key, 10));
  const totalRangePoints = rangePoints.length;
  const mappingIndex = rangePoints.findIndex((rangePoint, index) => {
    const isLastMapping = index === totalRangePoints - 1;
    const nextRangePoint = isLastMapping ? null : rangePoints[index + 1];
    return code >= rangePoint && (!nextRangePoint || code < nextRangePoint);
  });

  /**
   * Throw an error if no mapping for the icon was found.
   */
  if (mappingIndex === -1) {
    throw new Error(
      `Unable to determine icon for weather condition code: ${code}`
    );
  }

  /**
   * Get the icon resolver function from the mapping.
   */
  const resolveIcon = Object.entries(iconMapping)[mappingIndex][1];

  /**
   * Resolve the icon component.
   */
  const IconComponent = resolveIcon(isDaytime);

  /**
   * Render and return the icon component.
   */
  return <IconComponent />;
};
