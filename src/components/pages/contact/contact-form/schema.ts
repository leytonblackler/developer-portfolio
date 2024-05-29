import { z } from "zod";

/**
 * Define the schema for the contact form.
 */
export const ContactFormSchema = z.object({
  /**
   * Input fields
   */
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
  /**
   * Hidden fields
   */
  userIP: z.string().optional(),
  honeypot: z.string().optional(),
  /**
   * reCAPTCHA
   */
  reCaptchaToken: z.string(),
});

/**
 * Extract the inferred type from the schema.
 */
export type ContactFormData = z.infer<typeof ContactFormSchema>;
