"use client";

import {
  type ReactNode,
  useCallback,
  useMemo,
  type FunctionComponent,
} from "react";
import { isMobile } from "react-device-detect";
import { type DownloadResumeHandler } from "./types";
import { cn } from "@/utils/styling/cn";
import { Drawer } from "@/components/shared/drawer";

export const DownloadResumeButton: FunctionComponent = () => {
  // /* TODO: Add link to download and download icon */

  const onDownload = useCallback<DownloadResumeHandler>(() => {
    //
    console.log("onclick");
  }, []);

  const button = useMemo<ReactNode>(
    () => (
      <button
        className={cn(
          "mt-auto",
          "card-bg-secondary",
          "card-text-secondary",
          "card-border-secondary",
          "rounded-4xl p-10"
        )}
        type="button"
      >
        Download resume
      </button>
    ),
    []
  );

  return isMobile ? (
    <Drawer trigger={button}>
      <div className="h-[200px]">mobile</div>
    </Drawer>
  ) : (
    <div>
      <span>not mobile</span>
      {button}
    </div>
  );
};
