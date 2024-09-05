"use client";

import {
  type FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { type GlobalError, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { TbSend } from "react-icons/tb";
import { type ContactFormData, ContactFormSchema } from "./schema";
import { getIPAddress } from "@/utils/ip/get-ip-address";
import { ReCaptchaBadge } from "@/components/shared/re-captcha-badge";
import { Input } from "@/components/shared/input";
import { TextArea } from "@/components/shared/text-area";
import { cn } from "@/utils/styling/cn";
import { type ContactFormSectionDataFragment } from "@/hygraph/generated/graphql";

/**
 * The reCaptchaToken property does not have a corresponding input field
 * within the form itself, since the token is generated upon submit.
 * The type below is used to represent the form data that is passed to the
 * submit handler, where the reCAPTCHA token is then generated and appended
 * to form ContactFormData type which is then submitted to the backend endpoint.
 */
type ContactFormDataWithoutRecaptcha = Omit<ContactFormData, "reCaptchaToken">;

/**
 * A form for sending messages to my personal email address.
 */
export const ContactFormSection: FunctionComponent<
  ContactFormSectionDataFragment
> = () => {
  /**
   * Create the form instance.
   */
  const form = useForm<ContactFormDataWithoutRecaptcha>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      userIP: "",
      honeypot: "",
    },
    resolver: zodResolver(ContactFormSchema),
  });

  /**
   * Indicates whether the form has been successfully submitted.
   */
  const [submitted, setSubmitted] = useState<boolean>(false);

  /**
   * Indicates whether there was an error submitting the form
   * after successful field validation.
   */
  const submitError = useMemo<GlobalError | undefined>(
    () => form.formState.errors.root?.submit,
    [form.formState.errors.root?.submit]
  );

  /**
   * Indicates whether the form is currently in the process of being submitted.
   */
  const isSubmitting = useMemo(
    () => form.formState.isSubmitting,
    [form.formState]
  );

  /**
   * Fetches the user's IP address and sets it on the hidden userIP field
   * in the form.
   */
  const obtainAndSetIP = useCallback(async () => {
    try {
      const userIP = await getIPAddress();
      form.setValue("userIP", userIP);
    } catch (error) {
      // TODO: Exclude logs only in production
      console.warn("Failed to fetch user's IP address");
    }
  }, [form]);

  /**
   * Invoke the function on mount to obtain and set the user's IP address
   * on the form.
   */
  useEffect(() => {
    void obtainAndSetIP();
  }, [obtainAndSetIP]);

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

  /**
   * Indicates whether there was an error verifying the reCAPTCHA.
   */
  const reCaptchaError = useMemo<GlobalError | undefined>(
    () => form.formState.errors.root?.reCaptcha,
    [form.formState.errors.root?.reCaptcha]
  );

  /**
   * Handle reCAPTCHA verification.
   */
  const handleReCaptchaVerify = useCallback(async () => {
    /**
     * Throw an error if reCAPTCHA has not been loaded yet.
     */
    if (!executeRecaptcha) {
      throw new Error("Google reCAPTCHA script has not been loaded");
    }
    /**
     * Execute the reCAPTCHA verification and return the token.
     */
    return executeRecaptcha("contactFormSubmit");
  }, [executeRecaptcha]);

  /**
   * Handle submission of the form after successful validation.
   */
  const onSubmit = useCallback(
    async (formData: ContactFormDataWithoutRecaptcha) => {
      /**
       * Attempt reCAPTCHA verification.
       */
      let reCaptchaToken: string;
      try {
        reCaptchaToken = await handleReCaptchaVerify();
      } catch (error) {
        /**
         * Set an error on the root of the form to indicate an error with
         * reCAPTCHA verification (will be cleared on next submission attempt).
         */
        form.setError("root.reCaptcha", {
          message: "Verification failed. Please try again later.",
        });
        return;
      }

      /**
       * Append the reCAPTCHA token to the form data and attempt to submit.
       */
      try {
        await fetch("/api/contact", {
          method: "POST",
          body: JSON.stringify({
            ...formData,
            reCaptchaToken,
          }),
        });

        /**
         * Indicate that the form has been successfully submitted.
         */
        setSubmitted(true);
      } catch (error) {
        /**
         * Set an error on the root of the form to indicate an error unrelated
         * to a particular field (will be cleared on next submission attempt).
         */
        form.setError("root.submit", {
          message:
            "An error occurred while submitting the form. Please try again later.",
        });
      }
    },
    [form, handleReCaptchaVerify]
  );

  return submitted ? (
    // TODO: Style success message
    <div>success</div>
  ) : (
    <form
      onSubmit={void form.handleSubmit(onSubmit)}
      className="flex flex-col gap-y-2 text-black"
    >
      {/* Main fields */}
      <div className="flex w-full flex-col gap-2 md:flex-row">
        <Input
          {...form.register("name")}
          label="Name"
          disabled={isSubmitting}
        />
        <Input
          {...form.register("email")}
          label="Email"
          disabled={isSubmitting}
        />
      </div>
      <div className="flex flex-row">
        <TextArea
          {...form.register("message")}
          label="Message"
          disabled={isSubmitting}
        />
      </div>

      {/* Hidden fields */}
      <Input {...form.register("userIP")} hidden />
      <Input {...form.register("honeypot")} hidden />

      {/* Google reCAPTCHA */}
      {/* This component is only for branding and error indication. */}
      {/* Verification is handled via useGoogleReCaptcha hook. */}
      <div className="flex w-full flex-col gap-2 md:flex-row">
        <ReCaptchaBadge errorMessage={reCaptchaError?.message} />
        {/* Submit button */}
        <button
          type="submit"
          className={cn(
            "flex-1 rounded-full px-8 py-10 font-medium",
            "bg-gray-925 dark:bg-gray-300",
            "text-gray-200 dark:text-gray-925",
            "flex flex-row items-center justify-center gap-x-4"
          )}
          disabled={!reCaptchaReady}
          // loading={isSubmitting} TODO: Add loading spinner
        >
          {isSubmitting ? "Sending..." : "Send"}
          <TbSend className="h-6 w-6" />
        </button>
      </div>

      {/* TODO: style server error message */}
      {submitError ? <div>{submitError.message}</div> : null}
    </form>
  );
};
