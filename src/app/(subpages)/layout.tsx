import { type FunctionComponent, type ReactNode } from "react";
import { SafeArea } from "@/components/shared/safe-area";
import { HeroProvider } from "@/components/shared/hero/provider";

interface SubPageLayoutProps {
  children: ReactNode;
}

const SubPageLayout: FunctionComponent<SubPageLayoutProps> = ({ children }) => {
  return (
    <HeroProvider>
      <SafeArea>{children}</SafeArea>
    </HeroProvider>
  );
};

export default SubPageLayout;
