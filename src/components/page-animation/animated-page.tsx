"use client";

import { motion } from "framer-motion";
import { type FunctionComponent, type ReactNode } from "react";
import { ROUTE_CHANGE_ANIMATION_DURATION } from "@/components/page-animation/constants";

const variants = {
  initial: {
    opacity: 0,
    y: "10dvh",
    transition: {
      type: "tween",
      ease: "easeOut",
    },
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: ROUTE_CHANGE_ANIMATION_DURATION.ENTER,
    },
  },
  exit: {
    opacity: 0,
    y: "10dvh",
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: ROUTE_CHANGE_ANIMATION_DURATION.EXIT,
    },
  },
};

export const AnimatedPage: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <motion.main
      key="page"
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      className="origin-bottom"
    >
      {children}
    </motion.main>
  );
};
