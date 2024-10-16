import Link from "next/link";
import { type FunctionComponent } from "react";
import { type IconType } from "react-icons";
import { motion } from "framer-motion";
import { cn } from "@/utils/styling/cn";
import { IN_VIEW_MOTION_PROPS } from "@/constants/in-view-motion-props";

export interface SocialLinkProps {
  icon: IconType;
  href: string;
  color?: {
    base: string;
    contrast: string;
  };
}

const MotionLink = motion(Link);

export const SocialLink: FunctionComponent<SocialLinkProps> = ({
  icon: Icon,
  href,
  color,
}) => (
  <MotionLink
    {...IN_VIEW_MOTION_PROPS}
    href={href}
    className={cn(
      "flex-1",
      "flex items-center justify-center",
      "rounded-4xl",
      "p-10",
      /**
       * Default color.
       */
      !color &&
        cn("card-bg-primary", "card-border-primary border", "card-text-primary")
    )}
    style={{
      background: color?.base,
      color: color?.contrast,
    }}
  >
    <Icon className="size-6" />
  </MotionLink>
);
