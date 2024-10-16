import React, { type FunctionComponent } from "react";
import { ResumeSectionListItem, type ResumeSectionListItemData } from "./item";
import { cn } from "@/utils/styling/cn";

interface ResumeSectionListProps {
  isDarkMode: boolean;
  items: Omit<ResumeSectionListItemData, "isDarkMode" | "small">[];
  columns?: number;
  small?: boolean;
}

export const ResumeSectionList: FunctionComponent<ResumeSectionListProps> = ({
  isDarkMode,
  items,
  columns = 1,
  small = false,
}) => {
  /**
   * Split the items into rows based on the number of columns.
   */
  const rows = Array.from(
    { length: Math.ceil(items.length / columns) },
    (_, rowIndex) => items.slice(rowIndex * columns, (rowIndex + 1) * columns)
  );

  return (
    <table className={cn("w-full")}>
      <tbody>
        {rows.map((rowItems, rowIndex) => (
          <tr
            // eslint-disable-next-line react/no-array-index-key -- This is safe since the rows will be static.
            key={rowIndex}
          >
            {rowItems.map((item, itemIndex) => (
              <td key={item.title}>
                <div
                  className={cn(
                    rowItems.length > 1 && itemIndex < rowItems.length - 1
                      ? "mr-4"
                      : "mr-0",
                    rows.length > 1 && rowIndex < rows.length - 1
                      ? cn(small ? "mb-2.5" : "mb-4")
                      : "mb-0"
                  )}
                >
                  <ResumeSectionListItem
                    isDarkMode={isDarkMode}
                    small={small}
                    {...item}
                  />
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
