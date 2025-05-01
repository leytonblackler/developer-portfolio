import {
  type ReactNode,
  type FunctionComponent,
  useState,
  useCallback,
} from "react";
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

  /**
   * Whether the drawer is currently open.
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);

  /**
   * Handle one of the download buttons being clicked.
   *
   * Note that since the download is handled natively, this is only a callback
   * and does not need to actually invoke any downloading functionality.
   */
  const onDownloadStarted = useCallback(() => {
    /**
     * Close the drawer.
     */
    setIsOpen(false);

    // TODO: Show a toast that the download should have started
  }, []);

  return (
    <Drawer
      title="Download my resume"
      trigger={trigger}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <div
        className={cn(
          "flex gap-2",
          /**
           * Show the button for the current colour scheme first.
           */
          isDarkMode ? "flex-col-reverse" : "flex-col"
        )}
      >
        <Button
          label="Light version"
          icon={<HiOutlineSun />}
          cardStyle="secondary_light"
          download={`/${encodeURIComponent(
            constructResumePdfFilename(ColorScheme.Light)
          )}`}
          onClick={onDownloadStarted}
        />
        <Button
          label="Dark version"
          icon={<HiOutlineMoon />}
          cardStyle="secondary_dark"
          download={`/${encodeURIComponent(
            constructResumePdfFilename(ColorScheme.Dark)
          )}`}
          onClick={onDownloadStarted}
        />
      </div>
    </Drawer>
  );
};
