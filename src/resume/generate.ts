/* eslint-disable no-console -- This script is only run locally or at build time, so console logs are acceptable */
import path from "node:path";
import { writeFileSync } from "node:fs";
import { Onedoc } from "@onedoc/client";
import { cleanEnv, str } from "envalid";
import { compileDocument } from "./compile";
import { getResume } from "@/hygraph/queries/resume";
import { getGeneralApolloClient } from "@/hygraph/client/general";
import { getFragmentData } from "@/hygraph/generated";
import { ResumeDataFragmentDoc } from "@/hygraph/generated/graphql";

/**
 * Define the title to use for the generated PDF file, as well as the internal
 * PDF document title.
 */
const PDF_TITLE = "Leyton Blackler - Resume";

/**
 * Parse the environment and Onedoc API key environment variables.
 */
const { VERCEL_ENV, ONEDOC_API_KEY } = cleanEnv(process.env, {
  VERCEL_ENV: str(),
  ONEDOC_API_KEY: str(),
});

/**
 * Fetch the resume entry from Hygraph.
 */
const resume = await getResume({
  client: getGeneralApolloClient(),
});

/**
 * Get the fragment data for the resume entry.
 */
const resumeData = getFragmentData(ResumeDataFragmentDoc, resume);

/**
 * Initialise the Onedoc client.
 */
const onedoc = new Onedoc(ONEDOC_API_KEY);

/**
 * Attempt to generate the resume PDF document.
 */
const result = await onedoc.render({
  /**
   * Compile the document from JSX with the resume data fetched from Hygraph.
   */
  html: await compileDocument(resumeData),

  /**
   * The internal title for the PDF document.
   */
  title: PDF_TITLE,

  /**
   * Enable test mode in development. This applies a watermark to the generated
   * document, but avoids generations counting towards the monthly API usage
   * limits.
   */
  test: VERCEL_ENV === "development",

  /**
   * Disable saving to Onedoc to allow for the document to be returned as an
   * array buffer for local file writing instead.
   */
  save: false,
});

/**
 * Handle an error being returned in the generation result.
 */
const error = result.error as unknown;
if (error) {
  console.error(error);
  throw new Error("Failed to generate resume PDF.");
}

/**
 * Validate that the file from the generation result is an array buffer.
 */
if (!(result.file instanceof ArrayBuffer)) {
  throw new Error(
    "Array buffer was not returned in resume PDF generation result."
  );
}

/**
 * Create a new buffer from the array buffer.
 */
const buffer = Buffer.from(result.file);

/**
 * Write the resume PDF document to the public assets directory.
 */
writeFileSync(path.join("./public", `${PDF_TITLE}.pdf`), buffer);
