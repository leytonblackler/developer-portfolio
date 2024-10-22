import { type ReactNode, type FunctionComponent } from "react";
import { type DownloadResumeHandler } from "./types";
import { Drawer } from "@/components/shared/drawer";

export const DownloadResumeDrawer: FunctionComponent<{
  children: ReactNode;
  onDownload: DownloadResumeHandler;
}> = ({ children }) => {
  return (
    <Drawer trigger={children}>
      <div>test</div>
    </Drawer>
  );
};
