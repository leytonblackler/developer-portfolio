import { type FunctionComponent } from "react";
import { SectionsRenderer } from "@/components/shared/sections-renderer";
import { getGeneralPage } from "@/hygraph/queries/general-page";
import { getSSRApolloClient } from "@/hygraph/client/ssr";
import { getFragmentData } from "@/hygraph/generated";
import { GeneralPageDataFragmentDoc } from "@/hygraph/generated/graphql";
import { Hero } from "@/components/shared/hero";

const PAGE_ID = "clkui88ov1ks90b2muws8z6d4";

const AboutPage: FunctionComponent = async () => {
  /**
   * Fetch the "about" general page entry from Hygraph.
   */
  const aboutPage = await getGeneralPage({
    client: getSSRApolloClient(),
    variables: {
      id: PAGE_ID,
    },
  });

  /**
   * Get the fragment data for the about page.
   */
  const aboutPageData = getFragmentData(GeneralPageDataFragmentDoc, aboutPage);

  /**
   * Deconstruct the about page data.
   */
  const { heading, subHeading, sections } = aboutPageData;

  return (
    <div>
      {/* flex flex-row flex-wrap */}
      <div className="bounded-page-content-x">
        <Hero heading={heading} subHeading={subHeading} />
        <SectionsRenderer sections={sections} />
      </div>
    </div>
  );
};

export default AboutPage;
