import { type FunctionComponent, type ReactNode } from "react";
import { cn } from "@/utils/styling/cn";

interface CardProps {
  children: ReactNode;
  title: string;
  rowSpan?: number;
  contentPadding?: {
    left: boolean;
    bottom: boolean;
    right: boolean;
  };
}

// TODO: Scope cards to individual error boundaries

export const Card: FunctionComponent<CardProps> = ({
  children: content,
  title,
  rowSpan = 1,
  contentPadding = { left: true, bottom: true, right: true },
}) => (
  <div
    className={cn(
      "flex-1",
      "flex flex-col gap-y-6",
      "overflow-hidden rounded-7xl",
      "bg-gray-100 dark:bg-gray-900",
      "card-text-primary",
      "relative"
    )}
    style={{
      gridRow: `span ${rowSpan} / span ${rowSpan}`,
    }}
  >
    <div className={cn("px-10 pt-8")}>
      <h2
        className={cn(
          "text-gray-600 dark:text-gray-500",
          "text-xl",
          "font-medium",
          "whitespace-nowrap"
        )}
      >
        {title}
      </h2>
    </div>
    <div
      className={cn(
        "relative flex-1",
        "flex flex-col",
        contentPadding.left && "pl-10",
        contentPadding.bottom && "pb-10",
        contentPadding.right && "pr-10"
      )}
    >
      {content}
    </div>
  </div>
);
