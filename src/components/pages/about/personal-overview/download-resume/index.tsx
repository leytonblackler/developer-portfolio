"use client";

import { type ReactNode, useMemo, type FunctionComponent } from "react";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { DownloadResumeDrawer } from "./drawer";
import { Button } from "@/components/shared/button";

export const DownloadResumeButton: FunctionComponent = () => {
  /**
   * The button to be used as the trigger for the drawer or modal (depending on
   * screen width).
   */
  const trigger = useMemo<ReactNode>(
    () => (
      <Button
        label="Download my resume"
        type="button"
        icon={HiOutlineDocumentDownload}
        cardStyle="secondary"
      />
    ),
    []
  );

  return <DownloadResumeDrawer trigger={trigger} />;
};
