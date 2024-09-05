/* eslint-disable no-console -- Allow logging */

import { type Entry, type Entries } from "type-fest";
import { catchErrors } from "@/hygraph/errors";
import { getFragmentData } from "@/hygraph/generated";
import {
  TopLevelPage,
  PageLinkItemsQueryDocument,
  CompanyPageLinkItemDataFragmentDoc,
  type CompanyPageLinkItemDataFragment,
  type ProjectPageLinkItemDataFragment,
  type EducationalInstitutionPageLinkItemDataFragment,
  EducationalInstitutionPageLinkItemDataFragmentDoc,
  ProjectPageLinkItemDataFragmentDoc,
} from "@/hygraph/generated/graphql";
import { type ParsedColorSet, type QueryFunction } from "@/hygraph/types";
import { pagesConfig } from "@/config/pages";
import { parseColorSet } from "@/hygraph/utils/parse-color-set";

export interface PageLinkItemData {
  id: string;
  name: string;
  iconUrls: {
    light: string;
    dark: string;
  };
  parsedColorSet: ParsedColorSet;
}

export type PageLinkItemsReturn = Record<TopLevelPage, PageLinkItemData[]>;

export const getPageLinkItems: QueryFunction<
  PageLinkItemsReturn,
  { pages: TopLevelPage[] }
> = ({ client, variables: { pages } }) =>
  catchErrors<PageLinkItemsReturn>(async () => {
    const {
      data: { experiencePage, projectsPage, educationPage },
    } = await client.query({
      query: PageLinkItemsQueryDocument,
      variables: {
        projectsPageId: pagesConfig[TopLevelPage.Projects].hygraphPageId,
        experiencePageId: pagesConfig[TopLevelPage.Experience].hygraphPageId,
        educationPageId: pagesConfig[TopLevelPage.Education].hygraphPageId,
      },
    });

    /**
     * Construct the entries for the returned object data.
     */
    const entries: Entries<PageLinkItemsReturn> = pages.map((pageId) => {
      /**
       * Get the items data for the specified page type.
       */
      const itemsData:
        | CompanyPageLinkItemDataFragment[]
        | ProjectPageLinkItemDataFragment[]
        | EducationalInstitutionPageLinkItemDataFragment[] = (() => {
        /**
         * Handle deconstructing the items for the experience page.
         */
        if (pageId === TopLevelPage.Experience) {
          /**
           * Validate that the page data exists.
           */
          if (!experiencePage) {
            console.warn("Page data does not exist.");
            return [];
          }

          /**
           * Find the card list section from the page data.
           */
          const cardListSection = experiencePage.sections.find(
            (section) => section.__typename === "CardListSection"
          );

          /**
           * Validate that the card list section exists.
           */
          if (!cardListSection) {
            console.warn("Card list section does not exist in page data.");
            return [];
          }

          /**
           * Validate that the card list section has the correct typename
           * (this is mainly to validate that the item found above is
           * actually of the expected TypeScript type).
           */
          if (cardListSection.__typename !== "CardListSection") {
            console.warn("Card list section has incorrect typename.");
            return [];
          }

          /**
           * Normalise the items data into the shape of a page link item.
           */
          return cardListSection.items.flatMap((company) =>
            company.__typename === "Company"
              ? getFragmentData(CompanyPageLinkItemDataFragmentDoc, company)
              : []
          );
        }

        /**
         * Handle deconstructing the items for the projects page.
         */
        if (pageId === TopLevelPage.Projects) {
          /**
           * Validate that the page data exists.
           */
          if (!projectsPage) {
            console.warn("Page data does not exist.");
            return [];
          }

          /**
           * Find the card list section from the page data.
           */
          const cardListSection = projectsPage.sections.find(
            (section) => section.__typename === "CardListSection"
          );

          /**
           * Validate that the card list section exists.
           */
          if (!cardListSection) {
            console.warn("Card list section does not exist in page data.");
            return [];
          }

          /**
           * Validate that the card list section has the correct typename
           * (this is mainly to validate that the item found above is
           * actually of the expected TypeScript type).
           */
          if (cardListSection.__typename !== "CardListSection") {
            console.warn("Card list section has incorrect typename.");
            return [];
          }

          /**
           * Normalise the items data into the shape of a page link item.
           */
          return cardListSection.items.flatMap((project) =>
            project.__typename === "Project"
              ? getFragmentData(ProjectPageLinkItemDataFragmentDoc, project)
              : []
          );
        }

        /**
         * Handle deconstructing the items for the education page.
         */
        if (pageId === TopLevelPage.Education) {
          /**
           * Validate that the page data exists.
           */
          if (!educationPage) {
            console.warn("Page data does not exist.");
            return [];
          }

          /**
           * Find the card list section from the page data.
           */
          const cardListSection = educationPage.sections.find(
            (section) => section.__typename === "CardListSection"
          );

          /**
           * Validate that the card list section exists.
           */
          if (!cardListSection) {
            console.warn("Card list section does not exist in page data.");
            return [];
          }

          /**
           * Validate that the card list section has the correct typename
           * (this is mainly to validate that the item found above is
           * actually of the expected TypeScript type).
           */
          if (cardListSection.__typename !== "CardListSection") {
            console.warn("Card list section has incorrect typename.");
            return [];
          }

          /**
           * Normalise the items data into the shape of a page link item.
           */
          return cardListSection.items.flatMap((educationalInstitution) =>
            educationalInstitution.__typename === "EducationalInstitution"
              ? getFragmentData(
                  EducationalInstitutionPageLinkItemDataFragmentDoc,
                  educationalInstitution
                )
              : []
          );
        }

        /**
         * Return an empty array for pages that inherently do not have items.
         */
        return [];
      })();

      /**
       * Normalise the items data into the shape of a page link item.
       */
      const entry: Entry<PageLinkItemsReturn> = [
        pageId,
        itemsData.flatMap(({ id, name, logo, colors: unparsedColorSet }) => {
          /**
           * Exclude the item if it doesn't have both a light and dark icon.
           */
          if (
            !logo?.iconDark ||
            !("url" in logo.iconDark) ||
            !logo.iconLight ||
            !("url" in logo.iconLight)
          ) {
            return [];
          }

          /**
           * Parse the HEX color values from the color set.
           */
          const parsedColorSet = parseColorSet(unparsedColorSet);

          /**
           * Exclude the item if the color set could not be parsed.
           */
          if (!parsedColorSet) {
            return [];
          }

          return {
            id,
            name,
            iconUrls: {
              light: logo.iconLight.url,
              dark: logo.iconDark.url,
            },
            parsedColorSet,
          };
        }),
      ];

      return entry;
    });

    /**
     * Construct the returned object data from the entries.
     */
    return Object.fromEntries(entries) as PageLinkItemsReturn;
  });
