// /* eslint-disable no-console -- This script is only run locally or at build time, so console logs are acceptable */
// import path from "node:path";
// import { createWriteStream } from "node:fs";
// import { pipeline } from "node:stream/promises";
// import { capitalCase } from "change-case";
// import { FileforgeClient } from "@fileforge/client";
// import { cleanEnv, str } from "envalid";
// import { FileforgeError } from "@fileforge/client/dist/esm/client/codegen";
// import chalk from "chalk";
// import { ResumePersonalOverviewSectionDataFragmentDoc } from
// "../hygraph/generated/graphql"; import { ColorScheme } from
// "../hooks/color-scheme/types"; import { compileDocument } from "./compile";
// import { getResume } from "@/hygraph/queries/resume"; import {
// getGeneralApolloClient } from "@/hygraph/client/general"; import {
// getFragmentData } from "@/hygraph/generated"; import { ResumeDataFragmentDoc
// } from "@/hygraph/generated/graphql";

// /**
//  * Define the title to use for the generated PDF file, as well as the internal
//  * PDF document title.
//  */
// const PDF_TITLE = "Leyton Blackler - Resume";

// /**
//  * Construct the file name for the generated PDF file.
//  */
// const constructPdfFilename = (colorScheme: ColorScheme): `${string}.pdf` =>
//   `${PDF_TITLE} (${capitalCase(colorScheme)}).pdf`;

// /**
//  * Parse the environment and Onedoc API key environment variables.
//  */
// const { VERCEL_ENV, FILEFORGE_API_KEY } = cleanEnv(process.env, {
//   VERCEL_ENV: str(),
//   FILEFORGE_API_KEY: str(),
// });

// /**
//  * Fetch the resume entry from Hygraph.
//  */
// const resume = await getResume({
//   client: getGeneralApolloClient(),
// });

// /**
//  * Get the fragment data for the resume entry.
//  */
// const resumeData = getFragmentData(ResumeDataFragmentDoc, resume);

// /**
//  * Throw an error if there is no page with a personal overview section present
//  * in the data.
//  */
// if (!resumeData.pageWithPersonalOverview) {
//   throw new Error(
//     "Resume data does not include page with personal overview section."
//   );
// }

// /**
//  * Attempt to find the personal overview section in the page data.
//  */
// const personalOverviewSection =
//   resumeData.pageWithPersonalOverview.sections.find(
//     (section) => section.__typename === "PersonalOverviewSection"
//   );

// /**
//  * Throw an error if the personal overview section is not present.
//  */
// if (!personalOverviewSection) {
//   throw new Error(
//     "Personal overview section does not exist in page data from resume data."
//   );
// }

// /**
//  * Validate that the card list section has the correct typename (this is mainly
//  * to validate that the item found above is actually of the expected TypeScript
//  * type).
//  */
// if (personalOverviewSection.__typename !== "PersonalOverviewSection") {
//   throw new Error(
//     "Personal overview section in page data from resume data has incorrect typename."
//   );
// }

// /**
//  * Get the fragment data for the personal overview section.
//  */
// const personalOverviewSectionData = getFragmentData(
//   ResumePersonalOverviewSectionDataFragmentDoc,
//   personalOverviewSection
// );

// /**
//  * Initialise the Fileforge client.
//  */
// const fileforge = new FileforgeClient({
//   apiKey: FILEFORGE_API_KEY,
// });

// /**
//  * Generate the resume PDF document in both light and dark themes.
//  */
// await Promise.all(
//   Object.values(ColorScheme).map(async (colorScheme): Promise<void> => {
//     /**
//      * Compile the PDF content as an HTML string using the resume and personal
//      * overview section data.
//      */
//     const html = await compileDocument({
//       colorScheme,
//       resumeData,
//       personalOverviewSectionData,
//     });

//     /**
//      * Construct the filename for the PDF.
//      */
//     const fileName = constructPdfFilename(colorScheme);

//     /**
//      * Attempt to generate the PDF document using the Fileforge API.
//      */
//     const result = await (() => {
//       try {
//         return fileforge.pdf.generate(html, {
//           options: {
//             /**
//              * The internal title for the PDF document.
//              */
//             title: PDF_TITLE,

//             /**
//              * Disable saving to Fileforge to allow for the document to be
//              * returned as an array buffer for local file writing instead.
//              */
//             fileName,

//             /**
//              * Enable test mode in development. This applies a watermark to the
//              * generated document, but avoids generations counting towards the
//              * monthly API usage limits.
//              */
//             test: VERCEL_ENV === "development",
//           },
//         });
//       } catch (error) {
//         throw new Error(
//           `Failed to generate resume PDF: ${
//             error instanceof FileforgeError ? error.message : "."
//           }`
//         );
//       }
//     })();

//     /**
//      * Create a write stream to the output file
//      */
//     const outputStream = createWriteStream(path.join("./public", fileName));

//     /**
//      * Pipe the result to the file.
//      */
//     await pipeline(result, outputStream);

//     /**
//      * Log the result to the console.
//      */
//     console.log(
//       chalk.hex("#22c55e")(
//         `${capitalCase(
//           colorScheme
//         )} themed resume PDF generated and saved as: ${fileName}`
//       )
//     );
//   })
// );
