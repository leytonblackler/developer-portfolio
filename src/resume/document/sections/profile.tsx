import React, { type HTMLAttributes, type FunctionComponent } from "react";
import Markdown from "react-markdown";
import { ResumeSection } from "../components/section";
import { type ResumePersonalOverviewSectionDataFragment } from "@/hygraph/generated/graphql";
import { cn } from "@/utils/styling/cn";

type ResumeProfileSectionProps = {
  isDarkMode: boolean;
} & Pick<ResumePersonalOverviewSectionDataFragment, "description"> & {
    className?: HTMLAttributes<HTMLDivElement>["className"];
  };

export const ResumeProfileSection: FunctionComponent<
  ResumeProfileSectionProps
> = ({ isDarkMode, className, description }) => {
  return (
    <ResumeSection
      isDarkMode={isDarkMode}
      title="Profile"
      className={cn(className, "pb-2")}
      href="https://leytonblackler.dev/"
    >
      <Markdown
        components={{
          // eslint-disable-next-line react/no-unstable-nested-components -- This is safe since the document is static and only renders once.
          p: (props) => (
            <p
              {...props}
              className="mb-2 text-xs font-normal leading-[1.2rem]"
            />
          ),
        }}
      >
        {description.markdown}
      </Markdown>
      <p className="mb-2 text-xs font-normal leading-[1.2rem]">
        <span>{"Check out my website at "}</span>
        <a
          href="https://leytonblackler.dev/"
          className={cn(
            "font-semibold",
            isDarkMode ? "text-gray-200" : "text-gray-700" // card-text-primary
          )}
        >
          leytonblackler.dev
        </a>
        <span>{" for my showcase and to learn more about me."}</span>
      </p>
    </ResumeSection>
  );
};
