import { type FunctionComponent } from "react";
import { type IconType } from "react-icons";
import { motion } from "framer-motion";
import { cn } from "@/utils/styling/cn";
import {
  type ButtonAnimationProps,
  createButtonAnimationProps,
} from "@/utils/motion/create-button-animation-props";
import { IN_VIEW_ANIMATION_PROPS } from "@/constants/in-view-animation-props";
import { MotionLink } from "@/components/shared/motion-link";

/**
 * Evaluate the motion props for the button content.
 */
const BUTTON_ANIMATION_PROPS: ButtonAnimationProps = createButtonAnimationProps(
  { content: { scale: 1.15, rotate: 5 } }
);

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
  <motion.div {...IN_VIEW_ANIMATION_PROPS}>
    <motion.div
      {...BUTTON_ANIMATION_PROPS.outer}
      className="flex items-center justify-center"
    >
      <MotionLink
        {...BUTTON_ANIMATION_PROPS.inner}
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
        <motion.div {...BUTTON_ANIMATION_PROPS.content}>
          <Icon className="size-6 shrink-0" />
        </motion.div>
      </MotionLink>
    </motion.div>
  </motion.div>
);
