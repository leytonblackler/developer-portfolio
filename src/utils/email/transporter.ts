import nodemailer from "nodemailer";
import { smtpConfigIsValid } from "./types";

/**
 * Deconstruct required environment variables for SMTP configuration.
 */
const { SMTP_HOST, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD } = process.env;

/**
 * Construct the SMTP configuration object - this can't be typed
 * yet because we have not validated that the required environment
 * variables are present and of the correct types.
 */
const smtpConfig: unknown = {
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: true,
  auth: {
    user: SMTP_USERNAME,
    pass: SMTP_PASSWORD,
  },
};

/**
 * Throw an error if the SMTP config is invalid.
 */
if (!smtpConfigIsValid(smtpConfig)) {
  throw new Error(
    "SMTP configuration is invalid - ensure that the SMTP_HOST, SMTP_PORT, SMTP_USERNAME and SMTP_PASSWORD environment variables have been correctly set."
  );
}

/**
 * Create the SMTP transporter.
 */
export const transporter = nodemailer.createTransport(smtpConfig);
