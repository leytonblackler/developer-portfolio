import { type AnimationProps } from "framer-motion";

export const IN_VIEW_ANIMATION_PROPS = {
  variants: {
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
  },
  transition: {
    duration: 0.8,
    type: "spring",
    bounce: 0.3,
  },
} satisfies AnimationProps;
