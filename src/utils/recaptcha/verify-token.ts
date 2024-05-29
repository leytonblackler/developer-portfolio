import queryString from "query-string";
import { RecaptchaVerificationError } from "./errors";

type VerifyRecaptchaTokenFunction = (args: {
  token: string;
  userIP?: string;
}) => Promise<boolean>;

/**
 * Verifies if a submitted reCAPTCHA token is considered valid using a
 * score threshold of 0.5.
 * Refer to: https://www.google.com/recaptcha/api/siteverify
 */
export const verifyRecaptchaToken: VerifyRecaptchaTokenFunction = async ({
  token,
  userIP,
}) => {
  /**
   * Attempt to verify the reCAPTCHA token.
   */
  try {
    const response = await fetch(
      queryString.stringifyUrl({
        url: "https://www.google.com/recaptcha/api/siteverify",
        query: {
          /**
           * The reCAPTCHA secret key.
           */
          secret: process.env.RECAPTCHA_SECRET_KEY,
          /**
           * The reCAPTCHA token to verify.
           */
          response: token,
          /**
           * Add the user's IP address to the params object if provided.
           */
          ...(userIP ? { remoteip: userIP } : {}),
        },
      }),
      {
        method: "POST",
      }
    );

    /**
     * Check for error codes in the response.
     */
    if ("error-codes" in response) {
      const { "error-codes": errorCodes } = response;
      if (
        Array.isArray(errorCodes) &&
        errorCodes.every((errorCode) => typeof errorCode === "string") &&
        errorCodes.length > 0
      ) {
        throw new RecaptchaVerificationError(errorCodes as string[]);
      }
    }

    /**
     * Return the reCAPTCHA verification result.
     */
    if ("success" in response && typeof response.success === "boolean") {
      return response.success;
    }

    /**
     * Unknown error occurred.
     */
    throw new Error();
  } catch (error) {
    if (error instanceof RecaptchaVerificationError) {
      throw error;
    } else {
      throw new Error(
        "An unknown error occurred while verifying the reCAPTCHA token"
      );
    }
  }
};
