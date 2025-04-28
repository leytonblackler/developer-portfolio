import { type FunctionComponent } from "react";
import { type IconType } from "react-icons";
import { motion } from "framer-motion";
import { cn } from "@/utils/styling/cn";
import {
  BUTTON_INNER_MOTION_PROPS,
  BUTTON_OUTER_MOTION_PROPS,
  createButtonContentMotionProps,
} from "@/constants/button-motion-props";
import { IN_VIEW_MOTION_PROPS } from "@/constants/in-view-motion-props";
import { MotionLink } from "@/components/shared/motion-link";

export interface SocialLinkProps {
  icon: IconType;
  href: string;
  color?: {
    base: string;
    contrast: string;
  };
}

export const SocialLink: FunctionComponent<SocialLinkProps> = ({
  icon: Icon,
  href,
  color,
}) => (
  <motion.div {...IN_VIEW_MOTION_PROPS}>
    <motion.div
      {...BUTTON_OUTER_MOTION_PROPS}
      className="flex items-center justify-center"
    >
      <MotionLink
        {...BUTTON_INNER_MOTION_PROPS}
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
            cn(
              "card-bg-primary",
              "card-border-primary border",
              "card-text-primary"
            )
        )}
        style={{
          background: color?.base,
          color: color?.contrast,
        }}
      >
        <motion.div
          {...createButtonContentMotionProps({ scale: 1.15, rotate: 5 })}
        >
          <Icon className="size-6 shrink-0" />
        </motion.div>
      </MotionLink>
    </motion.div>
  </motion.div>
);
