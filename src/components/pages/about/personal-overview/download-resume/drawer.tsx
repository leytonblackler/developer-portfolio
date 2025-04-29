import { type ReactNode, type FunctionComponent } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { Drawer } from "@/components/shared/drawer";
import { cn } from "@/utils/styling/cn";
import { ColorScheme } from "@/hooks/color-scheme/types";
import { useIsDarkMode } from "@/hooks/color-scheme/use-color-scheme-mode";
import { Button } from "@/components/shared/button";
import { constructResumePdfFilename } from "@/resume/filename";

export const DownloadResumeDrawer: FunctionComponent<{
  trigger: ReactNode;
}> = ({ trigger }) => {
  /**
   * Get whether the current color scheme mode is dark.
   */
  const isDarkMode = useIsDarkMode();

  return (
    <Drawer title="Download my resume" trigger={trigger}>
      <div
        className={cn(
          "flex gap-2",
          /**
           * Show the button for the current colour scheme first.
           */
          isDarkMode ? "flex-col-reverse" : "flex-col"
        )}
      >
        {/* TODO: Close drawer when either version is clicked */}
        <Button
          label="Light version"
          icon={<HiOutlineSun />}
          cardStyle="secondary_light"
          download={`/${encodeURIComponent(
            constructResumePdfFilename(ColorScheme.Light)
          )}`}
        />
        <Button
          label="Dark version"
          icon={<HiOutlineMoon />}
          cardStyle="secondary_dark"
          download={`/${encodeURIComponent(
            constructResumePdfFilename(ColorScheme.Dark)
          )}`}
        />
      </div>
    </Drawer>
  );
};
