import { type FunctionComponent } from "react";
import { HiHeart } from "react-icons/hi";
import { cn } from "@/utils/styling/cn";

export const Footer: FunctionComponent = () => (
  <footer
    className={cn(
      "bounded-page-content-x",
      "flex flex-col",
      "items-center justify-center gap-y-6",
      "py-14 md:pt-16",
      "text-gray-700 dark:text-gray-200",
      "select-none"
    )}
  >
    {/* TODO: Add heart confetti on hover */}
    <div
      className={cn(
        "group",
        "px-6",
        "flex flex-row flex-wrap",
        "items-center justify-center gap-x-1",
        "text-sm font-medium"
      )}
    >
      <span className="whitespace-nowrap opacity-50">{`Designed and built `}</span>
      <span className="whitespace-nowrap opacity-50">{`with `}</span>
      <div className="relative size-4">
        <HiHeart className={cn("size-full", "text-inherit", "opacity-50")} />
        <HiHeart
          className={cn(
            "absolute inset-0",
            "size-full",
            "text-red-500",
            "transition-opacity duration-300",
            "opacity-0 group-hover:opacity-100"
          )}
        />
      </div>
      <span className="whitespace-nowrap opacity-50">{` by Leyton Blackler`}</span>
    </div>

    <div
      className={cn(
        "px-10",
        "opacity-20",
        "text-center text-xs font-medium",
        "flex flex-col",
        "items-center justify-center gap-y-2"
      )}
    >
      <span>
        All logos and trademarks are the property of their respective owners.
      </span>
      <span>Please contact me if you have any questions or concerns.</span>
    </div>
  </footer>
);
