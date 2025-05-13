"use client";

import { type FunctionComponent } from "react";
import { motion, type MotionStyle } from "framer-motion";
import Image from "next/image";
import { useInView } from "../smooth-scroller/use-in-view";
import { cn } from "@/utils/styling/cn";
import { IN_VIEW_ANIMATION_PROPS } from "@/constants/in-view-animation-props";

interface ImageCardProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  backgroundColor: MotionStyle["backgroundColor"];
  rowSpan?: number;
}

export const ImageCard: FunctionComponent<ImageCardProps> = ({
  src,
  width,
  height,
  alt,
  backgroundColor,
  rowSpan = 1,
}) => {
  /**
   * Observe when the card first enters the viewport.
   */
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      {...IN_VIEW_ANIMATION_PROPS}
      ref={ref}
      className={cn(
        "flex-1",
        "flex flex-col items-center justify-center",
        "origin-center",
        "rounded-6xl",
        "overflow-hidden",
        "relative",
        "card-border-primary",
        "h-auto max-h-[400px]"
      )}
      style={{
        gridRow: `span ${rowSpan} / span ${rowSpan}`,
        backgroundColor,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout="responsive"
        className="max-h-[400px] object-contain"
      />
    </motion.div>
  );
};
