import React, { type HTMLAttributes, type FunctionComponent } from "react";
import { ResumeSection } from "../components/section";

type ReferencesSectionProps = { isDarkMode: boolean } & Pick<
  HTMLAttributes<HTMLDivElement>,
  "className"
>;

export const ReferencesSection: FunctionComponent<ReferencesSectionProps> = ({
  isDarkMode,
  className,
}) => {
  return (
    <ResumeSection
      isDarkMode={isDarkMode}
      title="References"
      className={className}
    >
      <p className="-mt-0.5 text-[0.625rem] leading-none">
        Professional and personal references are available upon request.
      </p>
    </ResumeSection>
  );
};
