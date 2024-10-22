import React, {
  type ReactNode,
  type AnchorHTMLAttributes,
  type FunctionComponent,
} from "react";
import colors from "tailwindcss/colors";
import dayjs, { type Dayjs } from "dayjs";
import pluralize from "pluralize";
import { colord } from "colord";
import { Image, Link, Text, View } from "@react-pdf/renderer";
import { type DateRange } from "@/hygraph/generated/graphql";
import { formatDateRange } from "@/utils/date";
import { tw } from "@/resume/document/tailwind";

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
    <View style={tw("flex w-full flex-col")}>
      <View style={tw("flex w-full flex-col", content ? "mb-1.5" : "mb-0")}>
        <View style={tw("flex w-full flex-row items-start justify-between")}>
          <Link
            href={href}
            style={tw(
              "flex-1",
              "no-underline",
              "mr-1 flex flex-row items-center justify-start"
            )}
          >
            {typeof icon === "object" && icon.url && icon.backgroundColor ? (
              <View
                style={{
                  ...tw(
                    "flex items-center justify-center rounded-full",
                    "mr-1.5",
                    "w-5 min-w-5 max-w-5",
                    "h-5 min-h-5 max-h-5"
                  ),
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
                <Image
                  src={icon.url}
                  style={tw("object-contain", "w-2.5", "h-2.5")}
                />
              </View>
            ) : null}

            <View style={tw("mb-0.5 flex w-full flex-col")}>
              <View
                style={tw(
                  "w-full",
                  "flex flex-row",
                  "items-center justify-between"
                )}
              >
                <Text
                  style={{
                    ...tw("leading-none"),
                    ...tw(
                      isDarkMode
                        ? "text-gray-200 opacity-80"
                        : "text-gray-700 opacity-90", // card-text-primary
                      small ? "text-xxs" : "text-[0.8125rem]",
                      "font-medium"
                    ),
                  }}
                >
                  {title}
                </Text>
                {firstUsed
                  ? (() => {
                      const years = dayjs().diff(firstUsed, "year", true);
                      const unit: "year" | "month" =
                        years < 1 ? "month" : "year";
                      return (
                        <Text
                          style={{
                            ...tw("leading-none"),
                            ...tw(
                              isDarkMode ? "text-gray-200" : "text-gray-700", // card-text-primary
                              "opacity-50",
                              "ml-1.5 italic",
                              "text-[0.55rem]"
                            ),
                          }}
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
                        </Text>
                      );
                    })()
                  : null}
              </View>
              {dateRange ? (
                <Text
                  style={{
                    ...tw(
                      isDarkMode ? "text-gray-200" : "text-gray-700", // card-text-primary
                      "text-xxs",
                      "mt-1.5 italic",
                      "opacity-50"
                    ),
                  }}
                >
                  {formatDateRange(dateRange, {
                    fullMonth: false,
                  })}
                </Text>
              ) : null}
            </View>
          </Link>

          {tag ? (
            // <View style={tw("grow-0")}>
            <View
              style={tw(
                isDarkMode ? "bg-gray-850" : "bg-gray-150", // card-bg-secondary
                "rounded-full",
                "pb-1.5 pt-1 px-2"
              )}
            >
              <Text
                style={{
                  ...tw("leading-none"),
                  ...tw(
                    "text-xxs",
                    "font-medium",
                    isDarkMode // card-text-secondary
                      ? "text-gray-400 opacity-70"
                      : "text-gray-700 opacity-80"
                  ),
                }}
              >
                {tag}
              </Text>
            </View>
          ) : // </View>
          null}
        </View>
      </View>
      {content ? (
        <View
          style={tw(
            isDarkMode // card-text-primary-content
              ? "text-gray-200 opacity-70"
              : "text-gray-700 opacity-80",
            "flex flex-col",
            "text-xxs"
          )}
        >
          {typeof content === "string" ? (
            <Text>{content}</Text>
          ) : (
            <>
              {Array.isArray(content) &&
              content.every((item) => typeof item === "string")
                ? content.map((paragraph) => (
                    <Text key={paragraph}>{paragraph}</Text>
                  ))
                : content}
            </>
          )}
        </View>
      ) : null}
    </View>
  );
};
