"use client";

import { type FunctionComponent, useEffect } from "react";
import { HiOutlineArrowLeft, HiOutlineRefresh } from "react-icons/hi";
import { PlayMode } from "@aarsteinmedia/dotlottie-player-light";
import { cn } from "@/utils/styling/cn";
import { ErrorPageLayout } from "@/components/pages/error/layout";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage: FunctionComponent<ErrorPageProps> = ({ error, reset }) => {
  // TODO: Log the error to an error reporting service
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorPageLayout
      buttons={[
        {
          label: "Go back home",
          icon: HiOutlineArrowLeft,
          href: "/",
        },
        {
          label: "Reload page",
          icon: HiOutlineRefresh,
          onClick: reset,
        },
      ]}
    >
      <div className="flex flex-col items-center gap-y-10">
        <div className="relative size-20">
          <dotlottie-player
            autoplay
            loop
            mode={PlayMode.Normal}
            src="/lottie/fire.lottie"
            speed={2}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <h1
          className={cn(
            "text-3xl font-bold md:text-5xl",
            "text-center",
            "text-gray-925 dark:text-gray-300"
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
