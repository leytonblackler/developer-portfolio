import { type FunctionComponent, useMemo } from "react";
import Image from "next/image";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Link from "next/link";
import { ReCaptchaBadgeLink } from "./re-captcha-badge-link";
import { cn } from "@/utils/styling/cn";

interface ReCaptchaBadgeProps {
  /**
   * Shows an error message if there was an error verifying the reCAPTCHA.
   */
  errorMessage?: string;
}

export const ReCaptchaBadge: FunctionComponent<ReCaptchaBadgeProps> = ({
  errorMessage = undefined,
}) => {
  /**
   * Access Google reCAPTCHA.
   */
  const { executeRecaptcha } = useGoogleReCaptcha();

  /**
   * The executeRecaptcha function will not be present if the reCAPTCHA script
   * has not yet loaded or has failed to load.
   */
  const reCaptchaReady = useMemo(
    () => Boolean(executeRecaptcha),
    [executeRecaptcha]
  );

  return !reCaptchaReady ? (
    // TODO: Add loading spinner
    <div>loading...</div>
  ) : (
    <Link
      href="https://www.google.com/recaptcha/about/"
      className={cn(
        "bg-gray-100/50 dark:bg-gray-900/60",
        "rounded-6xl",
        "flex flex-col",
        "justify-center",
        "px-10 py-6"
      )}
    >
      <div
        className={cn("flex flex-row", "items-center justify-start", "gap-x-4")}
      >
        {/* Logo */}

        <Image
          src="/recaptcha-logo.svg"
          alt="Google reCAPTCHA"
          width={32}
          height={32}
          className={cn("h-8 w-8")}
        />
        <div className="flex flex-col">
          {/* Message */}
          <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
            protected by reCAPTCHA
          </p>
          {/* Links */}
          <div className="flex flex-row gap-x-2">
            <ReCaptchaBadgeLink href="https://policies.google.com/privacy">
              Privacy
            </ReCaptchaBadgeLink>
            <ReCaptchaBadgeLink href="https://policies.google.com/terms">
              Terms
            </ReCaptchaBadgeLink>
          </div>
        </div>
      </div>
      {/* TODO: Style error message */}
      {errorMessage ? <div>errorMessage</div> : null}
    </Link>
  );
};
