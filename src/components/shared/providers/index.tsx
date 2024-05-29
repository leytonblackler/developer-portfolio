import { type FunctionComponent, type ReactNode } from "react";
import { ScrollProvider } from "../smooth-scroller/provider";
import { ReCaptchaProvider } from "./re-captcha-provider";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers: FunctionComponent<ProvidersProps> = ({ children }) => (
  <ScrollProvider>
    <ReCaptchaProvider>{children}</ReCaptchaProvider>
  </ScrollProvider>
);
