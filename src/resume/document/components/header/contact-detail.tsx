import React from "react";
import { type FunctionComponent } from "react";
import { Link, Text } from "@react-pdf/renderer";
import colors from "tailwindcss/colors";
import { tw } from "../../tailwind";
import { type ReactPDFIcon } from "../icons/types";

interface ResumeContactDetailProps {
  isDarkMode: boolean;
  href: string;
  icon: ReactPDFIcon;
  className?: string;
  children: string;
}

export const ResumeContactDetail: FunctionComponent<
  ResumeContactDetailProps
> = ({ isDarkMode, href, icon: Icon, className, children }) => (
  <Link
    href={href}
    style={tw(
      "no-underline",
      "flex flex-row",
      "items-center",
      isDarkMode ? "text-gray-400" : "text-gray-700", // hero-text-secondary,
      "opacity-80",
      className
    )}
  >
    <Icon
      width={12}
      height={12}
      color={isDarkMode ? colors.gray[400] : colors.gray[700]} // hero-text-secondary,
    />
    <Text
      style={{
        ...tw("leading-none"),
        ...tw("ml-2 mb-0.5 text-[0.72rem] font-medium"),
      }}
    >
      {children}
    </Text>
  </Link>
);
