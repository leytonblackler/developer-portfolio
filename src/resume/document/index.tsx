import React, { type FunctionComponent } from "react";
import { Tailwind, CSS as Css } from "@onedoc/react-print";
import tailwindConfig from "../../../tailwind.config";
import { ResumeSection } from "./components/section";
import { ResumeHeader } from "./components/header";
import { ResumeProjectsSection } from "./sections/projects";
import { ResumeExperienceSection } from "./sections/experience";
import { ResumeTechnicalSkillsSection } from "./sections/technical-skills";
import { cn } from "@/utils/styling/cn";
import { type ResumeDataFragment } from "@/hygraph/generated/graphql";

export const ResumeDocument: FunctionComponent<ResumeDataFragment> = ({
  technologies,
  companies,
  projects,
}) => (
  <Tailwind config={tailwindConfig}>
    {/* <Css>
      {`@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap');

          @page {
            size: a4;
            margin: 0;
          }
        `}
    </Css> */}
    <Css>
      {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
          @page {
            size: a4;
            margin: 0;
          }
        `}
    </Css>
    <div className="flex h-screen w-screen flex-col bg-gray-50 p-2 font-[Plus_Jakarta_Sans]">
      <ResumeHeader />
      <main className="flex flex-1 flex-row">
        <div className="mr-1 flex flex-1 flex-col">
          <ResumeSection title="Profile" className="mb-1 flex-1">
            <p>TODO</p>
          </ResumeSection>
          <ResumeTechnicalSkillsSection
            className="mt-1 flex-1"
            technologies={technologies}
          />
        </div>
        <div className="ml-1 flex flex-1 flex-col">
          <ResumeExperienceSection
            className="mb-1 flex-1"
            companies={companies}
          />
          <ResumeProjectsSection className="my-1 flex-1" projects={projects} />
          <div className="mt-1 flex flex-row">
            <ResumeSection title="References" className="mr-1 flex-1">
              <p>
                Employment and personal references are available upon request.
              </p>
            </ResumeSection>
            <a
              href="https://leytonblackler.dev"
              className={cn(
                "ml-1 px-10 py-6",
                "rounded-4xl bg-gray-100",
                "flex items-center justify-center"
              )}
            >
              <svg
                className="size-10 fill-gray-400"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <path d=" M 197.796 361.102 L 197.82 361.079 L 162.949 326.211 L 162.926 326.234 L 157.319 320.625 L 69.739 233.045 L 69.762 233.022 L 34.892 198.153 L 34.868 198.174 L 0 233.045 L 33.921 266.963 L 122.451 355.493 L 156.483 389.526 L 245.035 478.079 L 278.955 512 L 391.839 399.116 L 376.394 383.67 L 357.919 365.195 L 279.905 443.211 L 197.796 361.102 Z " />
                  <path d=" M 388.809 123.191 C 392.472 90.853 381.934 57.205 357.128 32.4 C 313.916 -10.815 243.837 -10.792 200.624 32.423 L 69.761 163.284 L 103.682 197.204 L 234.542 66.341 C 258.989 41.897 298.765 41.873 323.21 66.318 C 347.133 90.243 347.585 128.821 324.656 153.379 C 324.158 153.877 323.594 154.352 323.073 154.872 L 192.347 285.597 L 226.379 319.63 L 357.105 188.904 C 357.627 188.385 358.102 187.863 358.621 187.344 C 383.156 164.436 421.733 164.844 445.682 188.79 C 470.127 213.237 470.103 253.013 445.659 277.458 L 392.812 330.305 L 426.732 364.223 L 479.577 311.376 C 522.792 268.163 522.815 198.084 479.6 154.872 C 454.795 130.066 421.147 119.528 388.809 123.191 Z " />
                </g>
              </svg>
            </a>
          </div>
        </div>

        {/* TODO: "This resume was built with React" */}
      </main>
    </div>
  </Tailwind>
);
