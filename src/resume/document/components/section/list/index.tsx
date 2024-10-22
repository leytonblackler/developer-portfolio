/* eslint-disable react/jsx-pascal-case -- Required for TR & TD components */
import React, { type FunctionComponent } from "react";
import { View } from "@react-pdf/renderer";
import { Table, TR, TD } from "@ag-media/react-pdf-table";
import { ResumeSectionListItem, type ResumeSectionListItemData } from "./item";
import { tw } from "@/resume/document/tailwind";

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
    <Table style={tw("w-full")}>
      {rows.map((rowItems, rowIndex) => (
        <TR
          // eslint-disable-next-line react/no-array-index-key -- This is safe since the rows will be static.
          key={rowIndex}
          style={tw("w-full")}
        >
          {rowItems.map((item, itemIndex) => (
            <TD key={item.title} style={tw("border-0")}>
              <View
                style={tw(
                  "w-full",
                  rowItems.length > 1 && itemIndex < rowItems.length - 1
                    ? "mr-4"
                    : "mr-0",
                  rows.length > 1 && rowIndex < rows.length - 1
                    ? "mb-3"
                    : "mb-0"
                )}
              >
                <ResumeSectionListItem
                  isDarkMode={isDarkMode}
                  small={small}
                  {...item}
                />
              </View>
            </TD>
          ))}
        </TR>
      ))}
    </Table>
  );
};
