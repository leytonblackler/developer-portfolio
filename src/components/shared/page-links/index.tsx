import { type FunctionComponent } from "react";
import { PageLinksSectionContent } from "./content";
import { type PageLinksSectionDataFragment } from "@/hygraph/generated/graphql";
import { getPageLinkItems } from "@/hygraph/queries/page-link-items";
import { getSSRApolloClient } from "@/hygraph/client/ssr";

export const PageLinksSection: FunctionComponent<
  PageLinksSectionDataFragment
> = async ({ pages }) => {
  /**
   * Fetch the page link items data from Hygraph for the specified page types.
   */
  const pageLinksData = await getPageLinkItems({
    client: getSSRApolloClient(),
    variables: { pages },
  });

  return <PageLinksSectionContent data={pageLinksData} />;
};
