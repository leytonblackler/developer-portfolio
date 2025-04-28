import { type AnimationProps } from "framer-motion";

const DEFAULT_PADDING_PX = 40; // p-10

const SCALE_INSET_PX_HOVER = {
  x: 8,
  y: 6,
};

const SCALE_INSET_PX_TAP = {
  x: SCALE_INSET_PX_HOVER.x * 1.5,
  y: SCALE_INSET_PX_HOVER.y * 1.5,
};

export interface ButtonAnimationProps {
  outer: AnimationProps;
  inner: AnimationProps;
  content: AnimationProps;
}

export const createButtonAnimationProps = (options?: {
  padding?: {
    x?: number;
    y?: number;
  };
  content?: {
    scale?: number;
    rotate?: number;
  };
}): ButtonAnimationProps => {
  const paddingX = options?.padding?.x ?? DEFAULT_PADDING_PX;
  const paddingY = options?.padding?.y ?? DEFAULT_PADDING_PX;

  const outer = {
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
  };

  return {
    outer,

    inner: {
      transition: outer.transition,
      variants: {
        idle: {
          paddingTop: paddingY,
          paddingRight: paddingX,
          paddingBottom: paddingY,
          paddingLeft: paddingX,
        },
        hover: {
          paddingTop: paddingY - SCALE_INSET_PX_HOVER.y,
          paddingRight: paddingX - SCALE_INSET_PX_HOVER.x,
          paddingBottom: paddingY - SCALE_INSET_PX_HOVER.y,
          paddingLeft: paddingX - SCALE_INSET_PX_HOVER.x,
        },
        tap: {
          paddingTop: paddingY - SCALE_INSET_PX_TAP.y,
          paddingRight: paddingX - SCALE_INSET_PX_TAP.x,
          paddingBottom: paddingY - SCALE_INSET_PX_TAP.y,
          paddingLeft: paddingX - SCALE_INSET_PX_TAP.x,
          transition: outer.variants.tap.transition,
        },
      },
    },

    content: {
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
          scale:
            options?.content?.scale && typeof options.content.scale === "number"
              ? options.content.scale
              : 1,
          rotate:
            options?.content?.scale &&
            typeof options.content.rotate === "number"
              ? options.content.rotate
              : 0,
        },
        tap: {
          scale: 0.9,
          rotate: 0,
          transition: {
            type: "spring",
            duration: 0.3,
          },
        },
      },
    },
  };
};
