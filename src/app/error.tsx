"use client";

import { type FunctionComponent, useEffect } from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import { cn } from "@/utils/styling/cn";

interface ErrorHandlerProps {
  error: Error;
  reset: () => void;
}

const Error: FunctionComponent<ErrorHandlerProps> = ({ error, reset }) => {
  useEffect(() => {
    // TODO: Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div
      className={cn(
        "h-full flex-1",
        "flex flex-col",
        "gap-y-8",
        "items-center justify-center text-center"
      )}
    >
      <div
        className={cn(
          "max-w-2xl",
          "flex flex-col",
          "items-center justify-center text-center"
        )}
      >
        <h1
          className={cn(
            "text-3xl font-bold md:text-5xl",
            "text-gray-900 dark:text-gray-300",
            "mb-8"
          )}
        >
          {`If you're seeing this, something went wrong.`}
        </h1>
        <p
          className={cn(
            "text-base font-normal md:text-lg",
            "text-gray-700 dark:text-gray-400",
            "mb-4",
            "opacity-90"
          )}
        >
          {`Maybe I'm experimenting with a new part of the site.`}
        </p>
        <p
          className={cn(
            "text-base font-normal md:text-lg",
            "text-gray-700 dark:text-gray-400",
            "mb-4",
            "opacity-60"
          )}
        >
          Or maybe I just broke something...
        </p>
        <p
          className={cn(
            "text-base font-normal md:text-lg",
            "text-gray-700 dark:text-gray-400",
            "mb-4",
            "opacity-30"
          )}
        >
          {`Either way, I'll have it working again soon.`}
        </p>
      </div>

      {/* TODO: Share style with contact form send button */}
      <div className="flex w-full max-w-sm flex-row">
        <button
          type="button"
          onClick={reset}
          className={cn(
            "flex-1 rounded-full px-8 py-10 font-medium",
            "bg-gray-900 dark:bg-gray-300",
            "text-gray-200 dark:text-gray-900",
            "flex flex-row items-center justify-center gap-x-4"
          )}
        >
          Reload page
          <HiOutlineRefresh className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Error;
