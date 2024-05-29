import { type FunctionComponent } from "react";
import { getSSRApolloClient } from "@/hygraph/client/ssr";
import { getGeneralPage } from "@/hygraph/queries/general-page";
import { SectionsRenderer } from "@/components/shared/sections-renderer";
import { GeneralPageDataFragmentDoc } from "@/hygraph/generated/graphql";
import { getFragmentData } from "@/hygraph/generated";
import { Hero } from "@/components/shared/hero";

const PAGE_ID = "cljdo1jix5t9x0b2wemymmqhb";

const ExperiencePage: FunctionComponent = async () => {
  /**
   * Fetch the "experience" general page entry from Hygraph.
   */
  const experiencePage = await getGeneralPage({
    client: getSSRApolloClient(),
    variables: {
      id: PAGE_ID,
    },
  });

  /**
   * Get the fragment data for the experience page.
   */
  const experiencePageData = getFragmentData(
    GeneralPageDataFragmentDoc,
    experiencePage
  );

  /**
   * Deconstruct the experience page data.
   */
  const { heading, subHeading, sections } = experiencePageData;

  return (
    <div className="bounded-page-content-x">
      <Hero heading={heading} subHeading={subHeading} />
      <SectionsRenderer sections={sections} />
    </div>
  );
};

export default ExperiencePage;
