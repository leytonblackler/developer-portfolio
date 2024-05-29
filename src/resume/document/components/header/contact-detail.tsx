import React from "react";
import { type FunctionComponent } from "react";
import { type IconType } from "react-icons";
import { cn } from "@/utils/styling/cn";

interface ResumeContactDetailProps {
  href: string;
  icon: IconType;
  className?: string;
  children: string;
}

export const ResumeContactDetail: FunctionComponent<
  ResumeContactDetailProps
> = ({ href, icon: Icon, children, className }) => (
  <a
    href={href}
    className={cn("flex flex-row", "items-center", " text-gray-600", className)}
  >
    <Icon
      style={{
        width: 16,
        height: 16,
      }}
    />
    <span className="ml-2 text-sm font-medium leading-none">{children}</span>
  </a>
);
