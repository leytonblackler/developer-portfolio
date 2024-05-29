/**
 * The SMTP configuration for the email transporter.
 */
export interface SMTPConfig {
  host: string;
  port: number;
  auth: {
    user: string;
    pass: string;
  };
}

/**
 * Type guard for SMTPConfig.
 */
export const smtpConfigIsValid = (config: unknown): config is SMTPConfig => {
  if (typeof config !== "object") {
    return false;
  }

  const { host, port, auth } = config as SMTPConfig;

  if (typeof host !== "string") {
    return false;
  }

  if (typeof port !== "number") {
    return false;
  }

  if (typeof auth !== "object") {
    return false;
  }

  const { user, pass } = auth;

  if (typeof user !== "string") {
    return false;
  }

  if (typeof pass !== "string") {
    return false;
  }

  return true;
};
