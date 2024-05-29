"use client";

import dayjs, { type Dayjs } from "dayjs";
import {
  useCallback,
  useEffect,
  useState,
  type FunctionComponent,
} from "react";
import utc from "dayjs/plugin/utc";
import timezonePlugin from "dayjs/plugin/timezone";

/**
 * Activate plugins.
 */
dayjs.extend(utc);
dayjs.extend(timezonePlugin);

interface CurrentTimeProps {
  timezone: string;
}

export const CurrentTime: FunctionComponent<CurrentTimeProps> = ({
  timezone,
}) => {
  /**
   * Formats the time into a presentable string.
   */
  const formatTime = useCallback((date: Dayjs) => date.format("h:mm a"), []);

  /**
   * The current time formatted as a presentable string.
   */
  const [currentTime, setCurrentTime] = useState<string>();

  /**
   * Update the current time by getting the current time for the timezone
   * and formatting it into a presentable string.
   */
  const updateCurrentTime = useCallback(() => {
    setCurrentTime(formatTime(dayjs().tz(timezone)));
  }, [timezone, formatTime]);

  /**
   * Update the current time every second.
   */
  useEffect(() => {
    const interval = setInterval(updateCurrentTime, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [updateCurrentTime]);

  return (
    <span className="text-2xl leading-none">{currentTime ?? <>&nbsp;</>}</span>
  );
};
