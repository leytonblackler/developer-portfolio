export interface TimeDetails {
  timezone: string;
  sunriseTimestamp: number;
  sunsetTimestamp: number;
}

export interface WeatherDetails {
  code: number;
  description: string;
}

export interface LocationDetails {
  time: TimeDetails;
  weather: WeatherDetails;
}
