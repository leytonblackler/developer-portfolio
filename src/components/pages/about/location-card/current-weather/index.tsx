import dayjs from "dayjs";
import { type FunctionComponent } from "react";
import utc from "dayjs/plugin/utc";
import timezonePlugin from "dayjs/plugin/timezone";
import { getWeatherIcon } from "./icons/get-weather-icon";
import { type LocationDetails } from "@/utils/location/types/location-details";
import { useStyledIcon } from "@/utils/icons/use-styled-icon";

/**
 * Activate plugins.
 */
dayjs.extend(utc);
dayjs.extend(timezonePlugin);

interface CurrentWeatherProps {
  locationDetails: LocationDetails;
}

export const CurrentWeather: FunctionComponent<CurrentWeatherProps> = ({
  locationDetails,
}) => {
  /**
   * Get the appropriate weather icon for the current weather conditions at the
   * provided location.
   */
  const icon = getWeatherIcon(locationDetails);

  /**
   * Apply styles to the icon.
   */
  const styledIcon = useStyledIcon(icon, "h-10 w-10 pt-1");

  // TODO: Show description on hover
  return styledIcon;
};
