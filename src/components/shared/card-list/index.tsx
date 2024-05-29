import { type FunctionComponent } from "react";
import { CardListItem } from "./item";
import { type CardListItemDataFragment } from "./types";
import { cn } from "@/utils/styling/cn";
import {
  CardListSectionCompanyItemDataFragmentDoc,
  CardListSectionProjectItemDataFragmentDoc,
  type CardListSectionDataFragment,
  CardListSectionEducationalInstitutionItemDataFragmentDoc,
} from "@/hygraph/generated/graphql";
import { getFragmentData } from "@/hygraph/generated";

/**
 * A section containing a list of entities as items displayed in a card format.
 */
export const CardListSection: FunctionComponent<
  CardListSectionDataFragment
> = ({ items }) => {
  /**
   * Get the fragment data for each of the items.
   */
  const itemsData: CardListItemDataFragment[] = items.map((item) => {
    /**
     * Deconstruct the item model type.
     */
    const { __typename: entityType } = item;

    /**
     * Throw an error if the item entity type is not present on the item.
     */
    if (!entityType) {
      throw new Error("Card list item is missing the entity type name.");
    }

    /**
     * Get the fragment data for the item using the fragment document
     * reflecting the item entity type.
     */
    return (() => {
      switch (entityType) {
        case "Company":
          return {
            __typename: entityType,
            ...getFragmentData(CardListSectionCompanyItemDataFragmentDoc, item),
          };
        case "Project":
          return {
            __typename: entityType,
            ...getFragmentData(CardListSectionProjectItemDataFragmentDoc, item),
          };
        case "EducationalInstitution":
          return {
            __typename: entityType,
            ...getFragmentData(
              CardListSectionEducationalInstitutionItemDataFragmentDoc,
              item
            ),
          };
      }
    })();
  });

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl",
        "px-8 sm:px-10",
        "pb-10 md:pb-16",
        "grid grid-cols-1 gap-2 md:grid-cols-2"
      )}
    >
      {itemsData.map((item) => (
        <CardListItem key={item.id} {...item} />
      ))}
    </div>
  );
};
