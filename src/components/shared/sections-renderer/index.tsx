import { type FunctionComponent } from "react";
import { PersonalOverviewSection } from "@/components/pages/about/personal-overview";
import { ContactFormSection } from "@/components/pages/contact/contact-form";
import {
  ProjectsListSectionDataFragmentDoc,
  type GeneralPageDataFragment,
  PersonalOverviewSectionDataFragmentDoc,
  ContactFormSectionDataFragmentDoc,
  BeliefsSectionDataFragmentDoc,
  CardListSectionDataFragmentDoc,
} from "@/hygraph/generated/graphql";
import {
  CardListSection,
  ProjectsListSection,
} from "@/components/shared/card-list";
import { getFragmentData } from "@/hygraph/generated";
import { BeliefsSection } from "@/components/pages/home/beliefs-section";

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
