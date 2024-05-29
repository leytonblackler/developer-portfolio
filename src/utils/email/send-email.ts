import type { SenderAddress } from "./sender-addresses";
import { transporter } from "./transporter";

type SendEmailFunction = (args: {
  senderAddress: SenderAddress;
  senderName?: string;
  replyTo?: string;
  to: string;
  subject: string;
  text: string;
}) => Promise<void>;

/**
 * Send an email via the SMTP transporter.
 */
export const sendEmail: SendEmailFunction = async ({
  senderAddress,
  senderName = "Leyton Blackler",
  replyTo = undefined,
  to,
  subject,
  text,
}) => {
  const result = await transporter.sendMail({
    from: `${senderName} <${senderAddress}>`,
    to,
    replyTo,
    subject,
    text,
  });

  console.log("result", result);
};
