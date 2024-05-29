import React, {
  type AnchorHTMLAttributes,
  type FunctionComponent,
} from "react";
import { type DateRange } from "@/hygraph/generated/graphql";
import { formatDateRange } from "@/utils/date";
import { cn } from "@/utils/styling/cn";

export interface ResumeSectionListItemData {
  title: string;
  href: AnchorHTMLAttributes<HTMLAnchorElement>["href"];
  dateRange?: Pick<DateRange, "startDate" | "endDate">;
  content: string | string[];
}

type ResumeSectionListItemProps = ResumeSectionListItemData & {
  last: boolean;
};

export const ResumeSectionListItem: FunctionComponent<
  ResumeSectionListItemProps
> = ({ title, href, dateRange, content, last }) => {
  return (
    <li className={cn("flex flex-col", !last && "mb-4")}>
      <div className="mb-px flex flex-row items-center">
        <a href={href} className={cn(dateRange && "mr-2")}>
          <h3 className="text-sm font-medium leading-none">{title}</h3>
        </a>

        {dateRange ? (
          <span className="italic leading-none text-gray-500">
            {formatDateRange(dateRange, {
              fullMonth: true,
            })}
          </span>
        ) : null}
      </div>

      <div className="mt-1 flex flex-col">
        {Array.isArray(content) ? (
          content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
        ) : (
          <p>{content}</p>
        )}
      </div>
    </li>
  );
};
