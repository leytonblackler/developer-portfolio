import { type FunctionComponent, type ReactNode } from "react";
import { Footer } from "@/components/shared/footer";
import { AnimatedPage } from "@/components/page-animation/animated-page";

const Template: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <AnimatedPage>
      <div id="animated-page-main-content" className="relative min-h-full">
        {children}
      </div>
      <Footer />
    </AnimatedPage>
  );
};

export default Template;
