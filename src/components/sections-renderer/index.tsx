import { type FunctionComponent } from "react";
import { SeparatorSection } from "../shared/separator";
import { PersonalOverviewSection } from "@/components/pages/home/personal-overview";
import { ContactFormSection } from "@/components/pages/contact/contact-form";
import {
  type GeneralPageDataFragment,
  PersonalOverviewSectionDataFragmentDoc,
  ContactFormSectionDataFragmentDoc,
  BeliefsSectionDataFragmentDoc,
  CardListSectionDataFragmentDoc,
  PageLinksSectionDataFragmentDoc,
  SeparatorSectionDataFragmentDoc,
} from "@/hygraph/generated/graphql";
import { CardListSection } from "@/components/shared/card-list";
import { getFragmentData } from "@/hygraph/generated";
import { BeliefsSection } from "@/components/pages/home/beliefs-section";
import { PageLinksSection } from "@/components/shared/page-links";

interface SectionsRendererProps {
  sections: GeneralPageDataFragment["sections"];
}

export const SectionsRenderer: FunctionComponent<SectionsRendererProps> = ({
  sections,
}) => (
  <div className="flex w-full flex-col gap-y-2">
    {sections.map((section) => {
      const { __typename: sectionType } = section;

      if (!sectionType) {
        return null;
      }

      switch (sectionType) {
        case "BeliefsSection": {
          return (
            <BeliefsSection
              {...getFragmentData(BeliefsSectionDataFragmentDoc, section)}
            />
          );
        }

        case "PersonalOverviewSection": {
          return (
            <PersonalOverviewSection
              {...getFragmentData(
                PersonalOverviewSectionDataFragmentDoc,
                section
              )}
            />
          );
        }

        case "PageLinksSection": {
          return (
            <PageLinksSection
              {...getFragmentData(PageLinksSectionDataFragmentDoc, section)}
            />
          );
        }

        case "SeparatorSection": {
          return (
            <SeparatorSection
              {...getFragmentData(SeparatorSectionDataFragmentDoc, section)}
            />
          );
        }

        case "CardListSection": {
          return (
            <CardListSection
              {...getFragmentData(CardListSectionDataFragmentDoc, section)}
            />
          );
        }

        case "ContactFormSection": {
          return (
            <ContactFormSection
              {...getFragmentData(ContactFormSectionDataFragmentDoc, section)}
            />
          );
        }

        default:
          return null;
      }
    })}
  </div>
);
