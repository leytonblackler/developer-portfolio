import { type NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";
import chalk from "chalk";
import { ZodError } from "zod";
import * as emoji from "node-emoji";
import {
  type ContactFormData,
  ContactFormSchema,
} from "@/components/pages/contact/contact-form/schema";
import { sendEmail } from "@/utils/email/send-email";
import { SenderAddress } from "@/utils/email/sender-addresses";
import { checkSpam } from "@/utils/spam/check-spam";
import { parseZodErrors } from "@/utils/zod/parse-errors";
import { mongodb } from "@/utils/database/mongodb";
import { verifyRecaptchaToken } from "@/utils/recaptcha/verify-token";
import { RecaptchaVerificationError } from "@/utils/recaptcha/errors";

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
  const { name, email, message, honeypot, userIP, reCaptchaToken } = formData;

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
   * Verify the reCAPTCHA token.
   */
  console.info(chalk.cyan("Validating reCAPTCHA token..."));
  let recaptchaVerified: boolean | null = null;
  try {
    recaptchaVerified = await verifyRecaptchaToken({
      token: reCaptchaToken,
      userIP,
    });
  } catch (error) {
    /**
     * Log the error.
     */
    console.error(
      chalk.red(
        error instanceof RecaptchaVerificationError
          ? error.toString()
          : "Unknown reCAPTCHA verification error"
      )
    );
  }

  /**
   * The spam check was performed successfully is the result is not null.
   */
  const recaptchaVerificationPerformed = recaptchaVerified !== null;

  /**
   * Log to the console whether reCPATCHA verfication was performed and the
   * verification result.
   */
  if (recaptchaVerificationPerformed) {
    console.log(
      emoji.emojify(
        recaptchaVerified
          ? chalk.green(":white_check_mark: reCAPTCHA verification passed!\n")
          : chalk.red(":x: reCAPTCHA verification did not pass\n")
      )
    );
  } else {
    console.log(
      emoji.emojify(
        chalk.yellow(
          ":warning:  reCAPTCHA verification could not be performed - skipping reCATPCHA...\n"
        )
      )
    );
  }

  /**
   * Get the required properties from the request headers for tracking / spam
   * checking. (If not present in the headers, these default to undefined as
   * they are optional for spam checking with Akismet).
   */
  const userAgent = request.headers.get("user-agent") ?? undefined;
  const referrer = request.headers.get("referer") ?? undefined;

  /**
   * Check if the message is spam using the Akismet API.
   */
  console.info(chalk.cyan("Checking if message is spam..."));
  let isSpam: boolean | null = null;
  /**
   * The user IP address is a required field for spam checking, so if this
   * was not included in the form data, then we can't perform spam checking
   * and will default to false to allow the message to be submitted to avoid
   * blocking.
   */
  if (userIP) {
    try {
      isSpam = await checkSpam({
        /**
         * Run in test mode when in the development environment.
         */
        isTest: process.env.VERCEL_ENV === "development",
        /**
         * Identify the content type as a contact form submission.
         */
        type: "contact-form",
        /**
         * The name of the user submitting the message.
         */
        name,
        /**
         * The email address of the user submitting the message.
         */
        email,
        /**
         * The actual message content.
         */
        content: message,
        /**
         * The IP address of the user submitting the message.
         */
        user_ip: userIP,
        /**
         * The user agent of the user where the message was submitted.
         */
        user_agent: userAgent,
        /**
         * The referrer URL for where the message was submitted.
         */
        referrer,
        /**
         * If a value is specified for the honeypot field, then it is assumed
         * that the message will be spam, since this field should not get
         * filled through normal usage of the contact form.
         */
        honeypot,
      });
    } catch (error) {
      /**
       * Log the error.
       */
      console.error(
        chalk.red(
          error instanceof Error ? error.message : "Unknown spam check error"
        )
      );
    }
  }

  /**
   * The spam check was performed successfully is the result is not null.
   */
  const spamCheckPerformed = isSpam !== null;

  /**
   * Log to the console whether spam check was performed and if identified as
   * spam.
   */
  if (spamCheckPerformed) {
    console.log(
      emoji.emojify(
        !isSpam
          ? chalk.green(
              ":white_check_mark: Message was identified as not being spam\n"
            )
          : chalk.red(":x: Message was identified as spam\n")
      )
    );
  } else {
    console.log(
      emoji.emojify(
        chalk.yellow(
          ":warning:  Spam check could not be performed - skipping spam check...\n"
        )
      )
    );
  }

  /**
   * Send the email to my personal email address if it the reCAPTCHA
   * verification and spam check passed (or if they were not performed, to
   * avoid blocking).
   */
  let emailSent = false;
  if (
    (!spamCheckPerformed || !isSpam) &&
    (!recaptchaVerificationPerformed || recaptchaVerified)
  ) {
    try {
      console.info(chalk.cyan("Forwarding message as email..."));
      await sendEmail({
        senderAddress: SenderAddress.MAILER,
        senderName: name,
        replyTo: email,
        to: "hello@leytonblackler.dev",
        subject: "New message on leytonblackler.dev",
        text: message, // TODO: Format email body
      });
      emailSent = true;
    } catch (error) {
      // TODO: Handle email failing to send
    }
  }

  /**
   * Save the submission to the MongoDB database.
   */
  try {
    console.info(chalk.cyan("Saving message details to database..."));
    const client = await mongodb.clientPromise;
    const db = client.db("contact_form");
    const result = await db.collection("submissions").insertOne({
      name,
      email,
      message,
      metadata: {
        spamCheck: {
          performed: spamCheckPerformed,
          result: isSpam,
        },
        recaptchaVerification: {
          performed: recaptchaVerificationPerformed,
          result: recaptchaVerified,
        },
        emailSent,
        userAgent,
        referrer,
      },
    });
    console.log("result", result);
  } catch (e) {
    // TODO: Handle error saving to MongoDB
    console.error(e);
  }

  /**
   * Indicate that the message was saved/sent successfully.
   */
  console.info(chalk.green("Message processed successfully!\n"));
  return NextResponse.json(null, { status: StatusCodes.OK });
};
