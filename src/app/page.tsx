import { type FunctionComponent } from "react";
import { getGeneralPage } from "@/hygraph/queries/general-page";
import { getSSRApolloClient } from "@/hygraph/client/ssr";
import { getFragmentData } from "@/hygraph/generated";
import { GeneralPageDataFragmentDoc } from "@/hygraph/generated/graphql";
import { HomePageMainSection } from "@/components/pages/home/main";
import { SafeArea } from "@/components/shared/safe-area";
import { SectionsRenderer } from "@/components/sections-renderer";

const PAGE_ID = "cljdjrcrz5tyl0b19dgn4fsfb";

const HomePage: FunctionComponent = async () => {
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
   * Get the fragment data for the home page.
   */
  const aboutPageData = getFragmentData(GeneralPageDataFragmentDoc, aboutPage);

  /**
   * Deconstruct the about page data.
   */
  const { heading, subHeading, sections } = aboutPageData;

  return (
    <div>
      <HomePageMainSection heading={heading} subHeading={subHeading} />
      <SafeArea>
        <div className="bounded-page-content-x">
          <SectionsRenderer sections={sections} />
        </div>

        <div>TODO: Contact</div>
      </SafeArea>
    </div>
  );
};

export default HomePage;
