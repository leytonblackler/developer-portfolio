import React, {
  type HTMLAttributes,
  type FunctionComponent,
  type ReactNode,
} from "react";
import { Link, Text, View } from "@react-pdf/renderer";
import { tw } from "../../tailwind";
import { evaluateSectionCardClassName } from "./classname";

interface ResumeSectionProps {
  isDarkMode: boolean;
  title: string;
  href?: string;
  indexHref?: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  children: ReactNode;
}

export const ResumeSection: FunctionComponent<ResumeSectionProps> = ({
  isDarkMode,
  title,
  href,
  indexHref,
  className,
  children,
}) => {
  /**
   * Create the element for the section title.
   */
  const titleElement = (
    <Text style={tw("text-base font-semibold")}>{title}</Text>
  );

  return (
    <View
      style={tw(
        evaluateSectionCardClassName({
          isDarkMode,
        }),
        className
      )}
    >
      <View
        style={tw(
          "w-full",
          "flex flex-row",
          "items-center justify-between",
          "mb-2.5"
        )}
      >
        <Text
          style={tw(
            "font-semibold",
            isDarkMode ? "text-gray-200" : "text-gray-700" // card-text-primary
          )}
        >
          {href ? (
            <Link
              href={href}
              style={tw(
                "no-underline",
                "font-medium",
                isDarkMode ? "text-gray-200" : "text-gray-700" // card-text-primary
              )}
            >
              {titleElement}
            </Link>
          ) : (
            titleElement
          )}
        </Text>

        {indexHref ? (
          <Link
            href={indexHref}
            style={tw("no-underline", "flex items-center justify-center")}
          >
            <Text
              style={tw(
                isDarkMode ? "text-gray-200" : "text-gray-700", // card-text-primary--content
                "text-xxs",
                "italic opacity-50"
              )}
            >
              View all on my website
            </Text>
          </Link>
        ) : null}
      </View>
      <View style={tw("w-full text-xxs", "flex flex-col gap-y-2")}>
        {children}
      </View>
    </View>
  );
};
