import { type FunctionComponent, type ReactNode } from "react";
import { SafeArea } from "@/components/shared/safe-area";
import { HeroEntryProvider } from "@/components/shared/hero/entry-provider";

interface SubPageLayoutProps {
  children: ReactNode;
}

const SubPageLayout: FunctionComponent<SubPageLayoutProps> = ({ children }) => {
  return (
    <HeroEntryProvider>
      <SafeArea>{children}</SafeArea>
    </HeroEntryProvider>
  );
};

export default SubPageLayout;
