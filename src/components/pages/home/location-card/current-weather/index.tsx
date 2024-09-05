import dayjs from "dayjs";
import { type FunctionComponent } from "react";
import utc from "dayjs/plugin/utc";
import timezonePlugin from "dayjs/plugin/timezone";
import { getWeatherIcon } from "./icons/get-weather-icon";
import { type LocationDetails } from "@/utils/location/types/location-details";

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
  const Icon = getWeatherIcon(locationDetails);

  // TODO: Show description on hover
  return <Icon className="h-10 w-10 pt-1" />;
};
