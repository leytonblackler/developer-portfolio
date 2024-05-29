import chalk from "chalk";
import { type FunctionComponent } from "react";
import { CurrentTime } from "./current-time";
import { CurrentWeather } from "./current-weather";
import { Map } from "./map";
import { getLocationDetails } from "@/utils/location";
import { cn } from "@/utils/styling/cn";
import { Card } from "@/components/shared/card";
import { type LocationDataFragment } from "@/hygraph/generated/graphql";
import { type LocationDetails } from "@/utils/location/types/location-details";

/**
 * A card displaying information about the location I am currently based in.
 */
export const LocationCard: FunctionComponent<LocationDataFragment> = async (
  location
) => {
  /**
   * Deconstruct the required properties from the location.
   */
  const { city, country, coordinates } = location;

  /**
   * Define the variable to hold the location details once fetched.
   */
  let locationDetails: LocationDetails;

  /**
   * Attempt to fetch additional details for the location.
   */
  try {
    locationDetails = await getLocationDetails(location);
  } catch (error) {
    /**
     * Log to the console that the component will not be rendered due to the
     * error fetching the location data.
     */
    console.error(
      chalk.red(
        "Error fetching location data, LocationCard will not be rendered."
      )
    );

    /**
     * Do not render if the location data was unable to be fetched.
     */
    return null;
  }

  /**
   * Deconstruct the timezone from the location details.
   */
  const {
    time: { timezone },
  } = locationDetails;

  return (
    <Card
      title="Currently based in"
      contentPadding={{
        left: false,
        right: false,
        bottom: false,
      }}
    >
      <div className="flex h-full flex-col">
        <div className="bounded-card-content-x flex flex-col">
          <div className="mb-1 flex flex-row flex-wrap text-3xl">
            <span>{`${city},`}&nbsp;</span>
            <span>{country}</span>
          </div>
          <div className="card-text-secondary flex flex-row items-center justify-start gap-x-6">
            <CurrentWeather locationDetails={locationDetails} />
            <CurrentTime timezone={timezone} />
          </div>
        </div>
        <div className="relative flex-1">
          <Map coordinates={coordinates} />
          {/* Gradient overlay to blend map into background */}
          <div
            className={cn(
              "pointer-events-none",
              "absolute left-0 top-0",
              "h-28 w-full",
              "bg-gradient-to-t",
              "from-transparent",
              "to-gray-100 dark:to-gray-900"
            )}
          />
        </div>
      </div>
    </Card>
  );
};
