import React, {
  type HTMLAttributes,
  type FunctionComponent,
  type ReactNode,
} from "react";
import { evaluateSectionCardClassName } from "./classname";
import { cn } from "@/utils/styling/cn";

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
  const titleElement = <h2 className="text-base font-semibold">{title}</h2>;

  return (
    <div
      className={cn(
        evaluateSectionCardClassName({
          isDarkMode,
        }),
        className
      )}
    >
      <div
        className={cn(
          "w-full",
          "flex flex-row",
          "items-center justify-between",
          "mb-2.5"
        )}
      >
        {href ? <a href={href}>{titleElement}</a> : <span>{titleElement}</span>}
        {indexHref ? (
          <a
            href={indexHref}
            className={cn(
              "flex items-center justify-center",
              "whitespace-nowrap"
            )}
          >
            <span
              className={cn(
                isDarkMode ? "text-gray-200" : "text-gray-700", // card-text-primary-content
                "text-[0.625rem]", // text-xxs
                "italic text-opacity-50"
              )}
            >
              View all on my website
            </span>
          </a>
        ) : null}
      </div>
      <div
        className={cn(
          "w-full text-xs",
          isDarkMode ? "text-gray-200/70" : "text-gray-700/80" // card-text-primary-content
        )}
      >
        {children}
      </div>
    </div>
  );
};
