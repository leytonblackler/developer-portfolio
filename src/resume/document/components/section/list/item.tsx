import React, {
  type ReactNode,
  type AnchorHTMLAttributes,
  type FunctionComponent,
} from "react";
import colors from "tailwindcss/colors";
import dayjs, { type Dayjs } from "dayjs";
import pluralize from "pluralize";
import { colord } from "colord";
import { type DateRange } from "@/hygraph/generated/graphql";
import { formatDateRange } from "@/utils/date";
import { cn } from "@/utils/styling/cn";

export interface ResumeSectionListItemData {
  isDarkMode: boolean;
  title: string;
  firstUsed?: Dayjs | null;
  icon?: {
    url?: string;
    backgroundColor?: string;
  };
  href: AnchorHTMLAttributes<HTMLAnchorElement>["href"];
  tag?: string | JSX.Element;
  dateRange?: Pick<DateRange, "startDate" | "endDate">;
  content?: string | string[] | ReactNode;
  small?: boolean;
}

export const ResumeSectionListItem: FunctionComponent<
  ResumeSectionListItemData
> = ({
  isDarkMode,
  title,
  firstUsed,
  icon,
  href,
  dateRange,
  content,
  tag,
  small = false,
}) => {
  return (
    <div className={cn("flex w-full flex-col")}>
      <div className={cn("flex w-full flex-col", content ? "mb-1.5" : "mb-0")}>
        <div className="flex w-full flex-row items-start justify-between">
          <a
            href={href}
            className="mr-2 flex w-full flex-row items-center justify-start"
          >
            {typeof icon === "object" && icon.url && icon.backgroundColor ? (
              <div
                className="mr-1.5 flex items-center justify-center rounded-full p-1"
                style={{
                  backgroundColor: (() => {
                    /**
                     * Map white background colors to gray-150.
                     */
                    if (colord(icon.backgroundColor).isEqual(colors.white)) {
                      return colord(colors.gray[100])
                        .mix(colors.gray[200], 0.5)
                        .toHex();
                    }

                    /**
                     * Map black background colors to gray-850.
                     */
                    if (colord(icon.backgroundColor).isEqual(colors.black)) {
                      return colord(colors.gray[800])
                        .mix(colors.gray[900], 0.5)
                        .toHex();
                    }

                    /**
                     * Return the original background color if it's not white
                     * or black.
                     */
                    return icon.backgroundColor;
                  })(),
                }}
              >
                <img
                  src={icon.url}
                  className="object-contain"
                  width={10}
                  height={10}
                  alt={`${title} Icon`}
                />
              </div>
            ) : null}

            <div className="mb-0.5 flex w-full flex-col">
              <div
                className={cn(
                  "w-full",
                  "flex flex-row",
                  "items-center justify-between"
                )}
              >
                <h3
                  className={cn(
                    isDarkMode ? "text-gray-200/80" : "text-gray-700/90", // card-text-primary
                    small ? "text-xs" : "text-[0.8125rem]",
                    "font-medium",
                    "whitespace-nowrap",
                    "leading-none"
                  )}
                >
                  {title}
                </h3>
                {firstUsed
                  ? (() => {
                      const years = dayjs().diff(firstUsed, "year", true);
                      const unit: "year" | "month" =
                        years < 1 ? "month" : "year";
                      return (
                        <span
                          className={cn(
                            isDarkMode ? "text-gray-200" : "text-gray-700", // card-text-primary
                            "text-opacity-50",
                            "text-[0.625rem]", // text-xxs
                            "ml-1.5 whitespace-nowrap italic leading-none"
                          )}
                        >
                          {pluralize(
                            unit,
                            Number(
                              (unit === "year"
                                ? years
                                : dayjs().diff(firstUsed, "month", true)
                              ).toFixed(unit === "year" ? 1 : 0)
                            ),
                            true
                          )}
                        </span>
                      );
                    })()
                  : null}
              </div>
              {dateRange ? (
                <span
                  className={cn(
                    isDarkMode ? "text-gray-200" : "text-gray-700", // card-text-primary
                    "text-[0.625rem]", // text-xxs
                    "mt-1 italic leading-none",
                    "text-opacity-50"
                  )}
                >
                  {formatDateRange(dateRange, {
                    fullMonth: false,
                  })}
                </span>
              ) : null}
            </div>
          </a>

          {tag ? (
            <div
              className={cn(
                isDarkMode ? "bg-gray-900" : "bg-gray-75", // card-bg-secondary
                isDarkMode ? "text-gray-400/70" : "text-gray-700/80", // card-text-secondary
                "rounded-full",
                "px-2 pb-1.5 pt-1",
                "text-[0.625rem]", // text-xxs
                "font-medium",
                "leading-none"
              )}
            >
              {tag}
            </div>
          ) : null}
        </div>
      </div>
      {content ? (
        <div
          className={cn(
            isDarkMode ? "text-gray-200/70" : "text-gray-700/80", // card-text-primary-content
            "flex flex-col",
            "text-[0.625rem]", // text-xxs
            "leading-4"
          )}
        >
          {typeof content === "string" ? (
            <p>{content}</p>
          ) : (
            <>
              {Array.isArray(content) &&
              content.every((item) => typeof item === "string")
                ? content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                : content}
            </>
          )}
        </div>
      ) : null}
    </div>
  );
};
