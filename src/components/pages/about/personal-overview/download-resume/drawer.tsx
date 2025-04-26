import { type ReactNode, type FunctionComponent } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { type DownloadResumeHandler } from "./types";
import { Drawer } from "@/components/shared/drawer";
import { cn } from "@/utils/styling/cn";
import { ColorScheme } from "@/hooks/color-scheme/types";
import { useIsDarkMode } from "@/hooks/color-scheme/use-color-scheme-mode";

export const DownloadResumeDrawer: FunctionComponent<{
  trigger: ReactNode;
  onDownload: DownloadResumeHandler;
}> = ({ trigger, onDownload }) => {
  /**
   * Get whether the current color scheme mode is dark.
   */
  const isDarkMode = useIsDarkMode();

  return (
    <Drawer trigger={trigger}>
      <div
        className={cn(
          "flex flex-wrap gap-4",
          /**
           * Show the button for the current colour scheme first.
           */
          isDarkMode ? "flex-row-reverse" : "flex-row"
        )}
      >
        {/* TODO: Add tap effects to buttons */}
        {/* TODO: Refactor buttons to share code */}
        <button
          type="button"
          className={cn(
            "flex-1",
            "flex flex-col gap-y-2",
            "items-center justify-center",
            "card-bg-secondary-light",
            "card-text-secondary-light",
            "card-border-secondary-light",
            "rounded-4xl p-10"
          )}
          onClick={() => {
            onDownload({ colorScheme: ColorScheme.Light });
          }}
        >
          <HiOutlineSun className="size-6 shrink-0" />
          <span className="font-medium leading-tight">
            Download light version
          </span>
        </button>
        <button
          type="button"
          className={cn(
            "flex-1",
            "flex flex-col gap-y-2",
            "items-center justify-center",
            "card-bg-secondary-dark",
            "card-text-secondary-dark",
            "card-border-secondary-dark",
            "rounded-4xl p-10"
          )}
          onClick={() => {
            onDownload({ colorScheme: ColorScheme.Dark });
          }}
        >
          <HiOutlineMoon className="size-6 shrink-0" />
          <span className="font-medium leading-tight">
            Download dark version
          </span>
        </button>
      </div>
    </Drawer>
  );
};
