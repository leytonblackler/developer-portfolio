import { type FunctionComponent } from "react";
import { SocialLinks } from "@/components/pages/contact/social-links";
import { Hero } from "@/components/shared/hero";
import { SectionsRenderer } from "@/components/shared/sections-renderer";
import { getGeneralPage } from "@/hygraph/queries/general-page";
import { getSSRApolloClient } from "@/hygraph/client/ssr";
import { getFragmentData } from "@/hygraph/generated";
import { GeneralPageDataFragmentDoc } from "@/hygraph/generated/graphql";

const PAGE_ID = "cljdog1ky5v9a0c2vf8m0la75";

const ContactPage: FunctionComponent = async () => {
  /**
   * Fetch the "contact" general page entry from Hygraph.
   */
  const contactPage = await getGeneralPage({
    client: getSSRApolloClient(),
    variables: {
      id: PAGE_ID,
    },
  });

  /**
   * Get the fragment data for the contact page.
   */
  const contactPageData = getFragmentData(
    GeneralPageDataFragmentDoc,
    contactPage
  );

  /**
   * Deconstruct the contact page data.
   */
  const { heading, subHeading, sections } = contactPageData;

  return (
    <div className="bounded-page-content-x">
      <Hero heading={heading} subHeading={subHeading} />
      <SectionsRenderer sections={sections} />
      <div className="mt-2">
        <SocialLinks />
      </div>
    </div>
  );
};

export default ContactPage;
