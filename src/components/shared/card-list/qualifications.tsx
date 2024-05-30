import { type FunctionComponent } from "react";
import pluralize from "pluralize";
import { type CardListSectionEducationalInstitutionItemDataFragment } from "@/hygraph/generated/graphql";

/**
 * An overlay description for an educational institution card list item
 * indicating the number of qualifications awarded.
 */
export const Qualifications: FunctionComponent<
  Pick<CardListSectionEducationalInstitutionItemDataFragment, "qualifications">
> = ({ qualifications }) =>
  pluralize("Qualification", qualifications.length, true);
