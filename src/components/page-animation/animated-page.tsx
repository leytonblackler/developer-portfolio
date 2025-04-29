"use client";

import { motion } from "framer-motion";
import {
  useEffect,
  useState,
  type FunctionComponent,
  type ReactNode,
} from "react";
import { useScrollInstance } from "../shared/smooth-scroller/use-scroll-instance";
import { AnimatedPageContext } from "./context";
import { ROUTE_CHANGE_ANIMATION_DURATION } from "@/components/page-animation/constants";
import { ScrollInstanceId } from "@/constants/scroll-instance-ids";

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
  /**
   * Whether the page container is currently animating.
   */
  const [isAnimating, setIsAnimating] = useState<boolean>(true);

  /**
   * Access the main scroll container instance.
   */
  const mainScrollInstance = useScrollInstance(ScrollInstanceId.Main);

  /**
   * Disable the main scroll container while the page is animating if it is not
   * currently disabled.
   */
  useEffect(() => {
    if (mainScrollInstance) {
      if (isAnimating && !mainScrollInstance.disabled) {
        mainScrollInstance.setDisabled(true);
      }
    }
  }, [mainScrollInstance, isAnimating]);

  return (
    <motion.div
      key="page"
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      className="origin-bottom"
      onAnimationStart={() => {
        setIsAnimating(true);
      }}
      onAnimationComplete={() => {
        setIsAnimating(false);
      }}
    >
      <AnimatedPageContext.Provider value={{ isAnimating }}>
        {children}
      </AnimatedPageContext.Provider>
    </motion.div>
  );
};
