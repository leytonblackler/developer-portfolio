import { type FunctionComponent, type ReactNode } from "react";
import { SafeArea } from "@/components/shared/safe-area";

interface SubPageLayoutProps {
  children: ReactNode;
}

const SubPageLayout: FunctionComponent<SubPageLayoutProps> = ({ children }) => {
  return <SafeArea>{children}</SafeArea>;
};

export default SubPageLayout;
