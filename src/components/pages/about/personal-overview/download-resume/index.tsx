"use client";

import {
  type ReactNode,
  useCallback,
  useMemo,
  type FunctionComponent,
} from "react";
import { useMediaQuery } from "usehooks-ts";
import { HiOutlineCloudDownload } from "react-icons/hi";
import { type DownloadResumeHandler } from "./types";
import { DownloadResumeDrawer } from "./drawer";
import { cn } from "@/utils/styling/cn";

export const DownloadResumeButton: FunctionComponent = () => {
  // /* TODO: Add link to download and download icon */

  const onDownload = useCallback<DownloadResumeHandler>(() => {
    //
    console.log("onclick");
  }, []);

  /**
   * Display the download options as a drawer on narrower screen sizes.
   */
  const drawerMode = useMediaQuery("(max-width: 700px)");

  const button = useMemo<ReactNode>(
    () => (
      // TODO: Share button code with buttons in drawer
      <button
        className={cn(
          "mt-auto",
          "flex flex-row gap-x-2",
          "items-center justify-center",
          "card-bg-secondary",
          "card-text-secondary",
          "card-border-secondary",
          "rounded-4xl p-10"
        )}
        type="button"
      >
        <HiOutlineCloudDownload className="size-6 shrink-0" />
        <span className="font-medium leading-tight">Download resume</span>
      </button>
    ),
    []
  );

  // TODO: Add tap effects to buttons
  return drawerMode ? (
    <DownloadResumeDrawer trigger={button} onDownload={onDownload} />
  ) : (
    <div className="flex flex-row">{button}</div>
  );
};
