import React, { type HTMLAttributes, type FunctionComponent } from "react";
import { Text } from "@react-pdf/renderer";
import { ResumeSection } from "../components/section";
import { tw } from "../tailwind";

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
      <Text style={tw("-mt-0.5 text-xxs leading-none")}>
        Professional and personal references are available upon request.
      </Text>
    </ResumeSection>
  );
};
