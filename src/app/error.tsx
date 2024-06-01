"use client";

import { type FunctionComponent, useEffect } from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import { cn } from "@/utils/styling/cn";
import { ErrorPageLayout } from "@/components/pages/error/layout";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage: FunctionComponent<ErrorPageProps> = ({ error, reset }) => {
  useEffect(() => {
    // TODO: Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    // <div
    //   className={cn(
    //     "h-full flex-1",
    //     "flex flex-col",
    //     "gap-y-8",
    //     "items-center justify-center text-center"
    //   )}
    // >
    //   <div
    //     className={cn(
    //       "max-w-2xl",
    //       "flex flex-col",
    //       "items-center justify-center text-center"
    //     )}
    //   >
    <ErrorPageLayout
      button={{
        label: "Reload page",
        icon: HiOutlineRefresh,
        onClick: reset,
      }}
    >
      <div className="flex flex-col items-center gap-y-10">
        <h1
          className={cn(
            "text-3xl font-bold md:text-5xl",
            "text-center",
            "text-gray-900 dark:text-gray-300"
          )}
        >
          {`If you're seeing this, something went wrong.`}
        </h1>
        <div className="flex flex-col items-center text-center">
          <p
            className={cn(
              "text-base font-normal md:text-lg",
              "text-gray-700 dark:text-gray-400",
              "mb-3",
              "opacity-100"
            )}
          >
            {`Maybe I'm experimenting with a new part of the site.`}
          </p>
          <p
            className={cn(
              "text-base font-normal md:text-lg",
              "text-gray-700 dark:text-gray-400",
              "mb-3",
              "opacity-70"
            )}
          >
            Or maybe I just broke something...
          </p>
          <p
            className={cn(
              "text-base font-normal md:text-lg",
              "text-gray-700 dark:text-gray-400",
              "mb-3",
              "opacity-40"
            )}
          >
            Either way, I should have it working again soon.
          </p>
        </div>
      </div>
    </ErrorPageLayout>
  );
};

export default ErrorPage;
