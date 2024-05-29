"use client";

import { type FunctionComponent, type ReactNode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

interface ReCaptchaProviderProps {
  children: ReactNode;
}

export const ReCaptchaProvider: FunctionComponent<ReCaptchaProviderProps> = ({
  children,
}) => {
  /**
   * Ensure that the environment variable for the reCAPTCHA site key has been
   * set.
   */
  if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
    throw new Error(
      "NEXT_PUBLIC_RECAPTCHA_SITE_KEY environment variable has not been set"
    );
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      language="en-GB"
      useRecaptchaNet
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};
