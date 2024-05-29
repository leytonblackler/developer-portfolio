import {
  type CardListSectionCompanyItemDataFragment as OriginalCardListSectionCompanyItemDataFragment,
  type CardListSectionEducationalInstitutionItemDataFragment as OriginalCardListSectionEducationalInstitutionItemDataFragment,
  type CardListSectionProjectItemDataFragment as OriginalCardListSectionProjectItemDataFragment,
} from "@/hygraph/generated/graphql";

// Utility type to make __typename non-nullable
type WithNonNullableTypename<T extends { __typename?: unknown }> = Omit<
  T,
  "__typename"
> & {
  __typename: NonNullable<T["__typename"]>;
};

export type CardListItemDataFragment =
  | WithNonNullableTypename<OriginalCardListSectionCompanyItemDataFragment>
  | WithNonNullableTypename<OriginalCardListSectionProjectItemDataFragment>
  | WithNonNullableTypename<OriginalCardListSectionEducationalInstitutionItemDataFragment>;
