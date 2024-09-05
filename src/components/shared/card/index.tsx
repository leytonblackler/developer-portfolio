"use client";

import { type FunctionComponent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "../smooth-scroller/use-in-view";
import { cn } from "@/utils/styling/cn";
import { IN_VIEW_MOTION_PROPS } from "@/constants/in-view-motion-props";

interface CardProps {
  children: ReactNode;
  title: string;
  rowSpan?: number;
  contentGap?: boolean;
  contentPadding?: {
    left: boolean;
    bottom: boolean;
    right: boolean;
  };
  contentClassName?: string;
}

// TODO: Scope cards to individual error boundaries

export const Card: FunctionComponent<CardProps> = ({
  children: content,
  title,
  rowSpan = 1,
  contentGap = true,
  contentPadding = { left: true, bottom: true, right: true },
  contentClassName,
}) => {
  /**
   * Observe when the card first enters the viewport.
   */
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <motion.div
      animate={isInView ? "visible" : "hidden"}
      {...IN_VIEW_MOTION_PROPS}
      ref={ref}
      className={cn(
        "flex-1",
        "flex flex-col",
        "origin-center",
        contentGap ? "gap-y-6" : "gap-y-0",
        "rounded-6xl",
        "overflow-hidden",
        "relative",
        "card-bg-primary"
      )}
      style={{
        gridRow: `span ${rowSpan} / span ${rowSpan}`,
      }}
    >
      <div className={cn("px-6 pt-8 sm:px-10")}>
        <h2
          className={cn(
            "card-text-primary",
            "text-xl",
            "font-medium",
            "whitespace-nowrap"
          )}
        >
          {title}
        </h2>
      </div>
      <div
        className={cn(
          "relative flex-1",
          "flex flex-col",
          "text-gray-700 dark:text-gray-200",
          "text-opacity-70",
          contentPadding.left && "pl-6 sm:pl-10",
          contentPadding.bottom && "pb-6 sm:pb-10",
          contentPadding.right && "pr-6 sm:pr-10",
          contentClassName
        )}
      >
        {content}
      </div>
    </motion.div>
  );
};
