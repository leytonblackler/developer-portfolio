import { type HTMLAttributes, type FunctionComponent } from "react";
import Link from "next/link";
import { cn } from "@/utils/styling/cn";
import { pagesConfig, type PageId } from "@/config/pages";

interface CardProps {
  pageId: PageId;
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
        "h-full",
        "min-h-[200px] lg:min-h-[250px]",
        "rounded-6xl",
        "flex flex-col",
        "items-center justify-center",
        "px-10 py-8",
        "transition-all duration-500",
        "bg-gray-100 dark:bg-gray-900",
        "text-gray-700 dark:text-gray-400",
        className
      )}
    >
      <div className="flex flex-row items-center justify-center gap-x-2">
        <Icon className="h-6 w-6 shrink-0" />
        <h2 className="text-xl font-semibold leading-none">{label}</h2>
      </div>
    </Link>
  );
};
