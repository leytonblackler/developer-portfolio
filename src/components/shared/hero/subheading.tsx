"use client";

import { type FunctionComponent } from "react";
import { motion } from "framer-motion";
import {
  SUBHEADING_LINE_ANIMATION_DURATION,
  SUBHEADING_LINE_STAGGER,
} from "./constants";
import { cn } from "@/utils/styling/cn";

interface HeroProps {
  children: string;
  animate: "initial" | "enter";
  onAnimationComplete?: () => void;
  delay: number;
  large: boolean;
}

export const SubHeading: FunctionComponent<HeroProps> = ({
  children,
  animate,
  onAnimationComplete,
  delay,
  large = false,
}) => {
  /**
   * Split the subheading into an array of separate lines.
   */
  const lines = children.split("\n");

  return (
    <motion.p
      initial={false}
      animate={animate}
      transition={{
        delayChildren: delay,
        staggerChildren: SUBHEADING_LINE_STAGGER,
      }}
      onAnimationComplete={onAnimationComplete}
      className={cn(
        large
          ? "text-lg sm:text-xl md:text-2xl"
          : "text-base sm:text-lg md:text-xl",
        "font-light",
        "max-w-2xl",
        "text-gray-700 dark:text-gray-400",
        "opacity-70",
        "flex flex-col gap-y-1"
      )}
    >
      {lines.map((line) => (
        <motion.span
          key={line}
          variants={{
            initial: {
              opacity: 0,
              y: "20%",
            },
            enter: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: SUBHEADING_LINE_ANIMATION_DURATION,
            type: "tween",
            ease: "easeOut",
          }}
        >
          {line}
        </motion.span>
      ))}
    </motion.p>
  );
};
