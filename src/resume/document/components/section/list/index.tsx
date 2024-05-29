import React, { type FunctionComponent } from "react";
import { ResumeSectionListItem, type ResumeSectionListItemData } from "./item";

interface ResumeSectionListProps {
  items: ResumeSectionListItemData[];
}

export const ResumeSectionList: FunctionComponent<ResumeSectionListProps> = ({
  items,
}) => {
  return (
    <ul className="flex flex-col">
      {items.map((item, index) => (
        <ResumeSectionListItem
          key={item.title}
          last={index === items.length - 1}
          {...item}
        />
      ))}
    </ul>
  );
};
