import { type DateRange } from "@/hygraph/generated/graphql";

interface EntryWithTimeFrame {
  timeFrame: Pick<DateRange, "startDate" | "endDate">;
}

/**
 * The sorting function for sorting entries by their time frame.
 */
const sorter = <T extends EntryWithTimeFrame>(
  { timeFrame: { endDate: endDateA } }: T,
  { timeFrame: { endDate: endDateB } }: T
): 1 | 0 | -1 => {
  if (endDateA > endDateB) {
    return -1;
  } else if (endDateA < endDateB) {
    return 1;
  }
  return 0;
};

/**
 * Handles sorting entries by their time frame, where the most recently ended,
 * or still active entries are first.
 */
export const sortByTimeFrame = <T extends EntryWithTimeFrame>(
  entries: T[]
): T[] => entries.sort(sorter);
