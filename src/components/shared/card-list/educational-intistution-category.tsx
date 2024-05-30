import { type FunctionComponent } from "react";
import { capitalCase } from "change-case";
import { type CardListSectionEducationalInstitutionItemDataFragment } from "@/hygraph/generated/graphql";
/**
 * An overlay description for an educational institution card list item
 * indicating the category.
 */
export const EducationalInstitutionCategory: FunctionComponent<
  Pick<CardListSectionEducationalInstitutionItemDataFragment, "category">
> = ({ category }) => capitalCase(category);
