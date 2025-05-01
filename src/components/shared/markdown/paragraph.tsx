import React, { type ClassAttributes, type HTMLAttributes } from "react";
import { type ExtraProps } from "react-markdown";
import { cn } from "@/utils/styling/cn";

export const MarkdownParagraph = ({
  className,
  ...props
}: ClassAttributes<HTMLParagraphElement> &
  HTMLAttributes<HTMLParagraphElement> &
  ExtraProps): JSX.Element => (
  <p
    className={cn(
      "card-text-primary",
      "text-opacity-80 dark:text-opacity-70",
      "text-sm font-medium leading-loose",
      "mb-3 last:mb-0",
      className
    )}
    {...props}
  />
);
