/**
 * Mappings of messages for the error codes returned by the reCAPTCHA
 * verification endpoints. Refer to:
 * https://developers.google.com/recaptcha/docs/verify#error_code_reference
 */
// TODO: Change this to an enum
const RecaptchaErrorMessageMapping = {
  "missing-input-secret": "The secret parameter is missing",
  "invalid-input-secret": "The secret parameter is invalid or malformed",
  "missing-input-response": "The response parameter is missing",
  "invalid-input-response": "The response parameter is invalid or malformed",
  "bad-request": "The request is invalid or malformed",
  "timeout-or-duplicate":
    "The response is no longer valid: either is too old or has been used previously",
};

/**
 * Represents messages for one or more errors that have been returned
 * by the reCAPTCHA verification endpoint.
 */
export class RecaptchaVerificationError extends Error {
  errors: string[];

  constructor(errorCodes: string[]) {
    super();
    this.errors = errorCodes
      .filter((errorCode) => errorCode in RecaptchaErrorMessageMapping)
      .map(
        (errorCode) =>
          RecaptchaErrorMessageMapping[
            errorCode as keyof typeof RecaptchaErrorMessageMapping
          ]
      );
  }

  public toString(): string {
    return this.errors.map((message) => `\n- ${message}`).join("");
  }
}
