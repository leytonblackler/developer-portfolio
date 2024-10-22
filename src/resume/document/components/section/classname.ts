import { cva } from "class-variance-authority";
import { cn } from "@/utils/styling/cn";

export const evaluateSectionCardClassName = cva(
  cn(
    "flex flex-col",
    "w-full",
    "px-5 pb-4 pt-3",
    "relative",
    "rounded-3xl",
    "border"
  ),
  {
    variants: {
      isDarkMode: {
        true: cn(
          "text-gray-200", // card-text-primary
          "bg-gray-925", // card-bg-primary
          "border-gray-900" // card-border-primary
        ),
        false: cn(
          "text-gray-700", // card-text-primary
          "bg-gray-25", // card-bg-primary
          "border-gray-100" // card-border-primary TODO: Set border opacity to 80%
        ),
      },
    },
  }
);
