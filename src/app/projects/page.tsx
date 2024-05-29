import { type FunctionComponent } from "react";
import { getSSRApolloClient } from "@/hygraph/client/ssr";
import { getGeneralPage } from "@/hygraph/queries/general-page";
import { SectionsRenderer } from "@/components/shared/sections-renderer";
import { GeneralPageDataFragmentDoc } from "@/hygraph/generated/graphql";
import { getFragmentData } from "@/hygraph/generated";
import { Hero } from "@/components/shared/hero";

const PAGE_ID = "cljdo5imm5tfl0b2w62oy93cf";

const ProjectsPage: FunctionComponent = async () => {
  /**
   * Fetch the "projects" general page entry from Hygraph.
   */
  const projectsPage = await getGeneralPage({
    client: getSSRApolloClient(),
    variables: {
      id: PAGE_ID,
    },
  });

  /**
   * Get the fragment data for the projects page.
   */
  const projectsPageData = getFragmentData(
    GeneralPageDataFragmentDoc,
    projectsPage
  );

  /**
   * Deconstruct the contact page data.
   */
  const { heading, subHeading, sections } = projectsPageData;

  return (
    <div className="bounded-page-content-x">
      <Hero heading={heading} subHeading={subHeading} />
      <SectionsRenderer sections={sections} />
    </div>
  );
};

export default ProjectsPage;
