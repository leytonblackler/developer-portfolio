import { type ZodIssue } from "zod";

export const parseZodErrors = (errors: ZodIssue[]): string =>
  errors
    .map(({ path, message }) => `\n- ${path.join(".")}: ${message}`)
    .join("");
