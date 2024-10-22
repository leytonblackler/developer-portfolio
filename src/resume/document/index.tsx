import React, { type FunctionComponent } from "react";
import { Page, View, Document } from "@react-pdf/renderer";
import { ResumeHeader } from "./components/header";
import { ResumeProjectsSection } from "./sections/projects";
import { ResumeExperienceSection } from "./sections/experience";
import { ResumeTechnicalSkillsSection } from "./sections/technical-skills";
import { ResumeBuiltWithReactSection } from "./sections/built-with-react";
import { ResumeEducationSection } from "./sections/education";
import { ResumeProfileSection } from "./sections/profile";
import { ReferencesSection } from "./sections/references";
import { tw } from "./tailwind";
import { registerFonts } from "./fonts/register";
import {
  type ResumePersonalOverviewSectionDataFragment,
  type ResumeDataFragment,
} from "@/hygraph/generated/graphql";
import { ColorScheme } from "@/hooks/color-scheme/types";

export const ResumeDocument: FunctionComponent<
  { title: string; colorScheme: ColorScheme } & Pick<
    ResumeDataFragment,
    "technologies" | "primaryEducationalInstitution" | "companies" | "projects"
  > &
    Pick<
      ResumePersonalOverviewSectionDataFragment,
      "name" | "pronouns" | "description"
    >
> = ({
  title,
  colorScheme,
  name,
  pronouns,
  description,
  technologies,
  primaryEducationalInstitution,
  companies,
  projects,
}) => {
  /**
   * Determine if the color scheme is dark mode.
   */
  const isDarkMode = colorScheme === ColorScheme.Dark;

  /**
   * Register fonts.
   */
  const { fontStyles } = registerFonts();

  return (
    <Document
      title={title}
      author={name}
      creator={name}
      producer={name}
      language="en_NZ"
    >
      <Page
        size="A4"
        style={{
          ...tw(
            isDarkMode ? "bg-gray-950" : "bg-gray-100", // root-bg
            "h-screen w-screen",
            "flex flex-col p-2"
          ),
          ...fontStyles["Plus Jakarta Sans"],
        }}
      >
        <ResumeHeader isDarkMode={isDarkMode} name={name} pronouns={pronouns} />
        <View style={tw("flex flex-1 flex-col")}>
          <View style={tw("flex flex-1 flex-row")}>
            <View style={tw("mr-0.5 flex flex-1 flex-col")}>
              <ResumeProfileSection
                isDarkMode={isDarkMode}
                className="mb-0.5 flex-1"
                description={description}
              />
              <ResumeTechnicalSkillsSection
                isDarkMode={isDarkMode}
                className="mt-0.5 grow-0"
                technologies={technologies}
              />
            </View>
            <View style={tw("ml-0.5 flex flex-1 flex-col")}>
              <ResumeExperienceSection
                isDarkMode={isDarkMode}
                className="mb-0.5 flex-1"
                companies={companies}
              />
              <ResumeEducationSection
                isDarkMode={isDarkMode}
                className="my-0.5 grow-0"
                primaryEducationalInstitution={primaryEducationalInstitution}
              />
              <ResumeProjectsSection
                isDarkMode={isDarkMode}
                className="my-0.5 flex-1"
                projects={projects}
              />
              <View style={tw("mt-0.5 flex flex-row")}>
                <ReferencesSection
                  isDarkMode={isDarkMode}
                  className="mr-1 flex-1"
                />
              </View>
            </View>
          </View>
          <ResumeBuiltWithReactSection
            isDarkMode={isDarkMode}
            className="mt-1"
          />
        </View>
      </Page>
    </Document>
  );

  // return (
  //   <Tailwind config={tailwindConfig}>
  //     <Css>
  //       {`
  //       @import url();
  //       @page {
  //         size: a4;
  //         margin: 0;
  //       }
  //       `}
  //     </Css>
  //     <div
  //       className={cn(
  //         isDarkMode ? "bg-gray-950" : "bg-gray-100", // root-bg
  //         "h-screen w-screen",
  //         "flex flex-col p-2"
  //       )}
  //       style={{
  //         fontFamily: "Plus Jakarta Sans",
  //       }}
  //     >
  // <ResumeHeader isDarkMode={isDarkMode} name={name} pronouns={pronouns} />
  // <main className="flex flex-1 flex-col"> <div className="flex flex-1
  // flex-row"> <div className="mr-0.5 flex flex-1 flex-col">
  // <ResumeProfileSection isDarkMode={isDarkMode} className="mb-0.5 flex-1"
  // description={description} /> <ResumeTechnicalSkillsSection
  // isDarkMode={isDarkMode} className="mt-0.5 flex-1"
  // technologies={technologies} /> </div> <div className="ml-0.5 flex flex-1
  // flex-col"> <ResumeExperienceSection isDarkMode={isDarkMode}
  // className="mb-0.5 flex-1" companies={companies} /> <ResumeEducationSection
  // isDarkMode={isDarkMode} className="my-0.5 h-fit max-h-fit shrink-0"
  // primaryEducationalInstitution={primaryEducationalInstitution} />
  // <ResumeProjectsSection isDarkMode={isDarkMode} className="my-0.5 flex-1"
  // projects={projects} /> <div className="mt-0.5 flex flex-row">
  // <ReferencesSection isDarkMode={isDarkMode} className="mr-1 flex-1" />
  // </div> </div> </div> <ResumeBuiltWithReactSection isDarkMode={isDarkMode}
  // className="mt-1" /> </main> </div> </Tailwind> );
};
