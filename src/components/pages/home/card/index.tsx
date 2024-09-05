import { type HTMLAttributes, type FunctionComponent } from "react";
import Link from "next/link";
import { cn } from "@/utils/styling/cn";
import { pagesConfig } from "@/config/pages";
import { type TopLevelPage } from "@/hygraph/generated/graphql";

interface CardProps {
  pageId: TopLevelPage;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export const Card: FunctionComponent<CardProps> = ({ pageId, className }) => {
  /**
   * Get the configuration for the page reflected by the card.
   */
  const {
    navLink: { label, icon: Icon, href },
  } = pagesConfig[pageId];

  return (
    <Link
      href={href}
      className={cn(
        "relative",
        "h-full",
        "min-h-[200px] lg:min-h-[250px]",
        "rounded-6xl",
        "flex flex-col",
        "items-center justify-center",
        "p-8",
        "transition-all duration-500",
        "bg-gray-100 hover:bg-gray-925",
        "dark:bg-gray-925 dark:hover:bg-gray-100",
        "dark:text-gray-500 dark:hover:text-gray-925",
        "text-gray-600 hover:text-gray-50",
        // "text-gray-700 dark:text-gray-400",
        className
      )}
    >
      {/* <div
        className={cn(
          "absolute h-full w-full",
          "flex items-start justify-start",
          "p-8",
          "opacity-5"
        )}
      >
        <Icon className="h-20 w-20 shrink-0" />
      </div> */}
      <div className="flex flex-row items-center justify-center gap-x-4">
        <h2 className="text-4xl font-medium leading-none opacity-50">
          {label}
        </h2>
      </div>
    </Link>
  );
};
