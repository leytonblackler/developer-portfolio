"use client";

import { type FunctionComponent } from "react";
import { motion } from "framer-motion";
import { NotoColorEmoji } from "../noto-color-emoji";
import { type SeparatorSectionDataFragment } from "@/hygraph/generated/graphql";
import { useInView } from "@/components/shared/smooth-scroller/use-in-view";

export const SeparatorSection: FunctionComponent<
  SeparatorSectionDataFragment
> = ({ emoji }) => {
  /**
   * Observe when the section first enters the viewport.
   */
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="my-12 flex select-none items-center justify-center sm:my-20"
    >
      <motion.span
        animate={
          isInView
            ? {
                scale: 1,
                opacity: 1,
                y: 0,
              }
            : {
                scale: 0,
                opacity: 0,
                y: 10,
              }
        }
        transition={{
          duration: 1,
          delay: 0.5,
          type: "spring",
          bounce: 0.3,
        }}
      >
        <NotoColorEmoji alt="Emoji" height={32}>
          {emoji}
        </NotoColorEmoji>
      </motion.span>
    </div>
  );
};
