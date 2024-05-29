import React, {
  type HTMLAttributes,
  type FunctionComponent,
  type ReactNode,
} from "react";
import { cn } from "@/utils/styling/cn";

interface ResumeSectionProps {
  title: string;
  href?: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  children: ReactNode;
}

export const ResumeSection: FunctionComponent<ResumeSectionProps> = ({
  title,
  href,
  className,
  children,
}) => {
  /**
   * Create the element for the section title.
   */
  const titleElement = <h2 className="mb-3 text-lg font-semibold">{title}</h2>;

  return (
    <div
      className={cn(
        "w-full",
        "px-6 pb-6 pt-4",
        "rounded-4xl bg-gray-100 text-gray-700",
        className
      )}
    >
      {href ? <a href={href}>{titleElement}</a> : titleElement}
      <div className="text-xs">{children}</div>
    </div>
  );
};
