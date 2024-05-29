import { type Dayjs } from "dayjs";
import { parseHygraphDate } from "./parse-hygraph-date";
import { type DateRange } from "@/hygraph/generated/graphql";

interface FormatDateRangeOptions {
  fullMonth?: boolean;
}

/**
 * Formats a Hygraph DateRange instance into a string.
 */
export const formatDateRange = (
  { startDate, endDate }: Pick<DateRange, "startDate" | "endDate">,
  options: FormatDateRangeOptions = {}
): string => {
  /**
   * Define the Day.js date format definition based on the options.
   */
  const dateFormat = `${options.fullMonth ? "MMMM" : "MMM"} YYYY`;

  /**
   * Attempt to parse each of the dates as Day.js instances.
   */
  const parsedStartDate: Dayjs | null = parseHygraphDate(startDate);
  const parsedEndDate: Dayjs | null = parseHygraphDate(endDate);

  /**
   * Format the start date as a string.
   */
  const formattedStartDate: string | null =
    parsedStartDate !== null ? parsedStartDate.format(dateFormat) : "N/A";

  /**
   * Format the start date as a string.
   */
  const formattedEndDate: string | null =
    parsedEndDate !== null ? parsedEndDate.format(dateFormat) : "Present";

  /**
   * Return the formatted date range as a concatenation of the formatted start
   * and end dates.
   */
  return `${formattedStartDate} - ${formattedEndDate}`;
};
