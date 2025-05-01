/* eslint-disable no-console -- Allow console logs for displaying in Vercel */

import { type NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";
import { ZodError } from "zod";
import * as emoji from "node-emoji";
import chalk from "chalk";
import {
  type ContactFormData,
  ContactFormSchema,
} from "@/components/pages/contact/contact-form/schema";
import { parseZodErrors } from "@/utils/zod/parse-errors";

type ContactFormSubmissionEndpoint = (
  request: NextRequest
) => Promise<NextResponse>;

export const POST: ContactFormSubmissionEndpoint = async (request) => {
  /**
   * Validate that the request body conforms to the contact form schema.
   */
  let formData: ContactFormData;
  try {
    formData = ContactFormSchema.parse(await request.json());
  } catch (error) {
    /**
     * Handle Zod parsing error(s).
     */
    if (error instanceof ZodError) {
      /**
       * Deconstruct the individual errors.
       */
      const { errors } = error;

      /**
       * Format and log the Zod parsing error(s).
       */
      console.error(parseZodErrors(errors));

      /**
       * Return an error indicating an invalid schema.
       */
      return NextResponse.json(
        { errors },
        { status: StatusCodes.UNPROCESSABLE_ENTITY }
      );
    }

    /**
     * Handle all other errors.
     */
    return NextResponse.json(
      {},
      {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
      }
    );
  }

  /**
   * Deconstruct the form data.
   */
  const {
    name,
    email,
    message,
    // honeypot, userIP, reCaptchaToken
  } = formData;

  /**
   * Log the details of the message.
   */
  console.info(
    emoji.emojify(
      `\n${chalk.cyan(
        [
          ":email:  New contact form submission:",
          `- Name: ${chalk.white.italic(name)}`,
          `- Email: ${chalk.white.italic(email)}`,
          `- Message: ${chalk.white.italic(message)}`,
        ].join("\n")
      )}\n`
    )
  );

  /**
   * Indicate that the message was saved/sent successfully.
   */
  console.info("Message processed successfully!\n");
  return NextResponse.json(null, { status: StatusCodes.OK });
};
