import { type AnimationProps } from "framer-motion";

export const IN_VIEW_MOTION_PROPS: Pick<
  AnimationProps,
  "variants" | "transition"
> = {
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
    duration: 0.5,
    type: "tween",
    ease: "easeOut",
  },
};
