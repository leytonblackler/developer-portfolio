"use client";

import { type FunctionComponent, type ReactNode } from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { ScrollProvider } from "../smooth-scroller/provider";
import { ReCaptchaProvider } from "./re-captcha-provider";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers: FunctionComponent<ProvidersProps> = ({ children }) => (
  <ScrollProvider>
    <RadixTooltip.Provider>
      <ReCaptchaProvider>{children}</ReCaptchaProvider>
    </RadixTooltip.Provider>
  </ScrollProvider>
);
