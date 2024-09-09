import { type FunctionComponent } from "react";
import { getSSRApolloClient } from "@/hygraph/client/ssr";
import { getGeneralPage } from "@/hygraph/queries/general-page";
import { SectionsRenderer } from "@/components/sections-renderer";
import { GeneralPageDataFragmentDoc } from "@/hygraph/generated/graphql";
import { getFragmentData } from "@/hygraph/generated";
import { Hero } from "@/components/shared/hero";
import { AfterHero } from "@/components/shared/hero/provider/after-hero";

const PAGE_ID = "cljdo403r5v250b2u7e3ddfdo";

const ExperiencePage: FunctionComponent = async () => {
  /**
   * Fetch the "education" general page entry from Hygraph.
   */
  const educationPage = await getGeneralPage({
    client: getSSRApolloClient(),
    variables: {
      id: PAGE_ID,
    },
  });

  /**
   * Get the fragment data for the education page.
   */
  const educationPageData = getFragmentData(
    GeneralPageDataFragmentDoc,
    educationPage
  );

  /**
   * Deconstruct the education page data.
   */
  const { heading, subHeading, sections } = educationPageData;

  return (
    <div className="bounded-page-content-x">
      <Hero heading={heading} subHeading={subHeading} />
      <AfterHero>
        <SectionsRenderer sections={sections} />
      </AfterHero>
    </div>
  );
};

export default ExperiencePage;
