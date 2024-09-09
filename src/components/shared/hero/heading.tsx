"use client";

import { motion } from "framer-motion";
import { type FunctionComponent } from "react";
import {
  HEADING_CHARACTER_ANIMATION_DURATION,
  HEADING_CHARACTER_ANIMATION_STAGGER,
} from "./constants";
import { cn } from "@/utils/styling/cn";

interface HeadingProps {
  children: string;
  animate: "initial" | "enter";
  large: boolean;
}

export const Heading: FunctionComponent<HeadingProps> = ({
  children,
  animate,
  large,
}) => {
  return (
    <motion.h1
      aria-label={children}
      initial={false}
      animate={animate}
      transition={{
        staggerChildren: HEADING_CHARACTER_ANIMATION_STAGGER,
      }}
      className={cn(
        large
          ? "text-3xl sm:text-4xl md:text-6xl"
          : "text-2xl sm:text-3xl md:text-5xl",
        "font-bold",
        "text-gray-850 dark:text-gray-100",
        "w-full",
        "relative",
        "flex flex-row",
        "items-center justify-center"
      )}
    >
      {children.split("").map((character, index) => (
        <motion.span
          // eslint-disable-next-line react/no-array-index-key -- Using the index is safe since the heading is static
          key={index}
          className={cn(
            "inline-block",
            large
              ? "mr-[calc(0.015_*_1.875rem)] sm:mr-[calc(0.015_*_2.25rem)] md:mr-[calc(0.015_*_3.75rem)]"
              : "mr-[calc(0.015_*_1.5rem)] sm:mr-[calc(0.015_*_1.875rem)] md:mr-[calc(0.015_*_3rem)]"
          )}
          variants={{
            initial: {
              opacity: 0,
              y: "25%",
            },
            enter: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            type: "tween",
            duration: HEADING_CHARACTER_ANIMATION_DURATION,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
        >
          {character === " " ? "\u00A0" : character}
        </motion.span>
      ))}
    </motion.h1>
  );
};
