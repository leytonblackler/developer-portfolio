import { type Dayjs } from "dayjs";
import { dayjs } from "./instance";

/**
 * Parses a date string from Hygraph as a Day.js instance.
 */
export const parseHygraphDate = (unparsedDate: unknown): Dayjs | null => {
  /**
   * Throw an error if the start date is not null, and is also not a string.
   */
  if (unparsedDate !== null && typeof unparsedDate !== "string") {
    throw new Error("Hygraph date value is of an unexpected type.");
  }

  /**
   * If the date is null, return null since there is no date to parse.
   */
  if (unparsedDate === null) {
    return null;
  }

  /**
   * Attempt to parse the date as a Day.js instance with the format expected
   * for Hygraph date strings.
   */
  const parsedDate: Dayjs = dayjs(unparsedDate, "YYYY-MM-DD");

  /**
   * If the date is invalid, return null.
   */
  if (!parsedDate.isValid()) {
    return null;
  }

  /**
   * Otherwise, return the parsed date.
   */
  return parsedDate;
};
