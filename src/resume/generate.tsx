/* eslint-disable no-console -- This script is only run locally or at build time, so console logs are acceptable */
import path from "node:path";
import React from "react";
import { capitalCase } from "change-case";
import chalk from "chalk";
import { default as ReactPDF } from "@react-pdf/renderer";
import { ResumePersonalOverviewSectionDataFragmentDoc } from "../hygraph/generated/graphql";
import { ColorScheme } from "../hooks/color-scheme/types";
import { ResumeDocument } from "./document";
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
 * Construct the file name for the generated PDF file.
 */
const constructPdfFilename = (colorScheme: ColorScheme): `${string}.pdf` =>
  `${PDF_TITLE} (${capitalCase(colorScheme)}).pdf`;

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
 * Throw an error if there is no page with a personal overview section present
 * in the data.
 */
if (!resumeData.pageWithPersonalOverview) {
  throw new Error(
    "Resume data does not include page with personal overview section."
  );
}

/**
 * Attempt to find the personal overview section in the page data.
 */
const personalOverviewSection =
  resumeData.pageWithPersonalOverview.sections.find(
    (section) => section.__typename === "PersonalOverviewSection"
  );

/**
 * Throw an error if the personal overview section is not present.
 */
if (!personalOverviewSection) {
  throw new Error(
    "Personal overview section does not exist in page data from resume data."
  );
}

/**
 * Validate that the card list section has the correct typename (this is mainly
 * to validate that the item found above is actually of the expected TypeScript
 * type).
 */
if (personalOverviewSection.__typename !== "PersonalOverviewSection") {
  throw new Error(
    "Personal overview section in page data from resume data has incorrect typename."
  );
}

/**
 * Get the fragment data for the personal overview section.
 */
const personalOverviewSectionData = getFragmentData(
  ResumePersonalOverviewSectionDataFragmentDoc,
  personalOverviewSection
);

/**
 * Generate the resume PDF document in both light and dark themes.
 */
for (const colorScheme of Object.values(ColorScheme)) {
  /**
   * Construct the filename for the PDF.
   */
  const fileName = constructPdfFilename(colorScheme);

  /**
   * Construct the output path for the PDF.
   */
  const outputPath = path.join("./public", fileName);

  /**
   * Attempt to generate the PDF document using the Fileforge API.
   */
  try {
    await ReactPDF.render(
      <ResumeDocument
        title={PDF_TITLE}
        colorScheme={colorScheme}
        {...resumeData}
        {...personalOverviewSectionData}
      />,
      outputPath
    );
  } catch (error) {
    throw new Error(
      `Failed to render resume PDF: ${
        error instanceof Error ? error.message : "."
      }`
    );
  }

  /**
   * Log the result to the console.
   */
  console.log(
    chalk.hex("#22c55e")(
      `${capitalCase(
        colorScheme
      )} themed resume PDF generated and saved as: ${fileName}`
    )
  );
}
