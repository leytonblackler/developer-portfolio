import { type MotionProps } from "framer-motion";

const PADDING_PX = 40; // p-10
const SCALE_INSET_PX_HOVER = {
  x: 8,
  y: 6,
};
const SCALE_INSET_PX_TAP = {
  x: SCALE_INSET_PX_HOVER.x * 1.5,
  y: SCALE_INSET_PX_HOVER.y * 1.5,
};

export const BUTTON_OUTER_MOTION_PROPS = {
  initial: "idle",
  whileHover: "hover",
  whileTap: "tap",
  transition: {
    type: "tween",
    ease: "easeOut",
    duration: 0.2,
  },
  variants: {
    idle: {
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
    },
    hover: {
      paddingTop: SCALE_INSET_PX_HOVER.y,
      paddingRight: SCALE_INSET_PX_HOVER.x,
      paddingBottom: SCALE_INSET_PX_HOVER.y,
      paddingLeft: SCALE_INSET_PX_HOVER.x,
    },
    tap: {
      paddingTop: SCALE_INSET_PX_TAP.y,
      paddingRight: SCALE_INSET_PX_TAP.x,
      paddingBottom: SCALE_INSET_PX_TAP.y,
      paddingLeft: SCALE_INSET_PX_TAP.x,
      transition: {
        type: "spring",
        duration: 0.3,
      },
    },
  },
} satisfies MotionProps;

export const BUTTON_INNER_MOTION_PROPS = {
  transition: BUTTON_OUTER_MOTION_PROPS.transition,
  variants: {
    idle: {
      paddingTop: PADDING_PX,
      paddingRight: PADDING_PX,
      paddingBottom: PADDING_PX,
      paddingLeft: PADDING_PX,
    },
    hover: {
      paddingTop: PADDING_PX - SCALE_INSET_PX_HOVER.y,
      paddingRight: PADDING_PX - SCALE_INSET_PX_HOVER.x,
      paddingBottom: PADDING_PX - SCALE_INSET_PX_HOVER.y,
      paddingLeft: PADDING_PX - SCALE_INSET_PX_HOVER.x,
    },
    tap: {
      paddingTop: PADDING_PX - SCALE_INSET_PX_TAP.y,
      paddingRight: PADDING_PX - SCALE_INSET_PX_TAP.x,
      paddingBottom: PADDING_PX - SCALE_INSET_PX_TAP.y,
      paddingLeft: PADDING_PX - SCALE_INSET_PX_TAP.x,
      transition: BUTTON_OUTER_MOTION_PROPS.variants.tap.transition,
    },
  },
} satisfies MotionProps;

export const createButtonContentMotionProps = (options?: {
  scale?: number;
  rotate?: number;
}): MotionProps => ({
  transition: {
    type: "tween",
    ease: "easeOut",
    duration: 0.2,
  },
  variants: {
    idle: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: options && typeof options.scale === "number" ? options.scale : 1,
      rotate:
        options && typeof options.rotate === "number" ? options.rotate : 0,
    },
    tap: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        duration: 0.3,
      },
    },
  },
});
