import React, { type HTMLAttributes, type FunctionComponent } from "react";
import { evaluateSectionCardClassName } from "../components/section/classname";
import { cn } from "@/utils/styling/cn";

type ResumeBuiltWithReactSectionProps = { isDarkMode: boolean } & Pick<
  HTMLAttributes<HTMLDivElement>,
  "className"
>;

export const ResumeBuiltWithReactSection: FunctionComponent<
  ResumeBuiltWithReactSectionProps
> = ({ isDarkMode, className }) => {
  return (
    <div
      className={cn(
        evaluateSectionCardClassName({ isDarkMode }),
        "flex items-center justify-center",
        className
      )}
    >
      <p
        className={cn(
          "mt-0.5 whitespace-nowrap text-center",
          "text-[0.625rem]", // text-xxs
          "leading-none",
          isDarkMode ? "text-gray-200" : "text-gray-700", // card-text-primary
          "text-opacity-50"
        )}
      >
        Resume built with React, with content sourced from Hygraph CMS, and
        generated as part of the CI/CD pipeline for{" "}
        <a
          href="https://leytonblackler.dev/"
          className={cn(
            "font-medium",
            isDarkMode ? "text-gray-200/70" : "text-gray-700/80" // card-text-primary-content
          )}
        >
          leytonblackler.dev
        </a>
        .
      </p>
    </div>
  );
};
