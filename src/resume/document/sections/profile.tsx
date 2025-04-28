import React, { type HTMLAttributes, type FunctionComponent } from "react";
import Markdown from "react-markdown";
import { Link, Text } from "@react-pdf/renderer";
import { ResumeSection } from "../components/section";
import { tw } from "../tailwind";
import { type ResumePersonalOverviewSectionDataFragment } from "@/hygraph/generated/graphql";
import { cn } from "@/utils/styling/cn";

type ResumeProfileSectionProps = {
  isDarkMode: boolean;
} & Pick<ResumePersonalOverviewSectionDataFragment, "description"> & {
    className?: HTMLAttributes<HTMLDivElement>["className"];
  };

export const ResumeProfileSection: FunctionComponent<
  ResumeProfileSectionProps
> = ({ isDarkMode, className, description }) => {
  const descriptionLines = description.markdown
    .split("\n")
    .filter((line) => line !== "");

  return (
    <ResumeSection
      isDarkMode={isDarkMode}
      title="Profile"
      className={cn(className, "pb-2")}
      href="https://leytonblackler.dev/"
    >
      {descriptionLines.map((line) => (
        <Markdown
          key={line}
          components={{
            // eslint-disable-next-line react/no-unstable-nested-components -- This is safe since the document is static and only renders once.
            p: ({ children }) => (
              <Text
                style={{
                  ...tw("leading-relaxed"),
                  ...tw(
                    "text-[0.72rem]",
                    "font-normal",
                    isDarkMode // card-text-primary--content
                      ? "text-gray-200 opacity-70"
                      : "text-gray-700 opacity-80"
                  ),
                }}
              >
                {children}
              </Text>
            ),
          }}
        >
          {line}
        </Markdown>
      ))}
      <Text
        style={{
          ...tw("leading-relaxed"),
          ...tw(
            "mb-2",
            "text-[0.72rem]",
            "font-normal",
            isDarkMode // card-text-primary--content
              ? "text-gray-200"
              : "text-gray-700"
          ),
        }}
      >
        <Text style={tw(isDarkMode ? "opacity-70" : "opacity-80")}>
          {"Check out my website at "}
        </Text>
        <Link
          href="https://leytonblackler.dev/"
          style={tw(
            "no-underline",
            "font-semibold",
            isDarkMode // card-text-primary--content
              ? "text-gray-200"
              : "text-gray-700"
          )}
        >
          leytonblackler.dev
        </Link>
        <Text style={tw(isDarkMode ? "opacity-70" : "opacity-80")}>
          {" for my showcase and to learn more about me."}
        </Text>
      </Text>
    </ResumeSection>
  );
};
