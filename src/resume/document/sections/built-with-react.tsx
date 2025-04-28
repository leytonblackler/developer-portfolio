import React, { type HTMLAttributes, type FunctionComponent } from "react";
import { Link, Text, View } from "@react-pdf/renderer";
import { evaluateSectionCardClassName } from "../components/section/classname";
import { tw } from "../tailwind";

type ResumeBuiltWithReactSectionProps = { isDarkMode: boolean } & Pick<
  HTMLAttributes<HTMLDivElement>,
  "className"
>;

export const ResumeBuiltWithReactSection: FunctionComponent<
  ResumeBuiltWithReactSectionProps
> = ({ isDarkMode, className }) => (
  <View
    style={tw(
      evaluateSectionCardClassName({ isDarkMode }),
      "flex items-center justify-center",
      className
    )}
  >
    <View
      style={tw(
        "mt-0.5",
        "flex flex-row justify-center items-center",
        isDarkMode ? "text-gray-200" : "text-gray-700" // card-text-primary
      )}
    >
      <Text style={tw("opacity-50", "text-xxs")}>
        Resume built with React, with content sourced from Hygraph CMS, and
        generated as part of the CI/CD pipeline for{" "}
      </Text>
      <Link href="https://leytonblackler.dev/" style={tw("no-underline")}>
        <Text
          style={{
            ...tw(
              "font-medium",
              "text-xxs text-current",
              isDarkMode // card-text-primary--content
                ? "text-gray-200 opacity-70"
                : "text-gray-700 opacity-80"
            ),
          }}
        >
          leytonblackler.dev
        </Text>
      </Link>
      <Text style={tw("opacity-50", "text-xxs")}>.</Text>
    </View>
  </View>
);
