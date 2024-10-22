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
    initial="idle"
    whileHover="hover"
    whileTap="tap"
    transition={{
      type: "tween",
      ease: "easeOut",
      duration: 0.2,
    }}
    variants={{
      idle: {
        scale: 1,
      },
      hover: {
        scale: 0.94,
      },
      tap: {
        scale: 0.88,
        transition: {
          type: "spring",
          duration: 0.3,
        },
      },
    }}
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
    <motion.div
      transition={{
        type: "spring",
      }}
      variants={{
        idle: {
          scale: 1,
        },
        hover: {
          scale: 1.2,
        },
        tap: {
          scale: 1,
          transition: {
            type: "spring",
            duration: 0.3,
          },
        },
      }}
    >
      <Icon className="size-6" />
    </motion.div>
  </MotionLink>
);
