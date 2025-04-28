import { capitalCase } from "change-case";
import { type ColorScheme } from "@/hooks/color-scheme/types";

/**
 * Define the title to use for the generated PDF file, as well as the internal
 * PDF document title.
 */
export const RESUME_PDF_TITLE = "Leyton Blackler - Resume";

/**
 * Construct the file name for the generated PDF file.
 */
export const constructResumePdfFilename = (
  colorScheme: ColorScheme
): `${string}.pdf` => `${RESUME_PDF_TITLE} (${capitalCase(colorScheme)}).pdf`;
