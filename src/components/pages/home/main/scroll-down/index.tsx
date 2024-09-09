"use client";

import { type FunctionComponent } from "react";
import { motion } from "framer-motion";
import {
  INITIAL_WAVE_DELAY,
  WAVE_DURATION,
  WAVE_ENTER_DELAY,
} from "../wave/constants";
import { RotatingTextCircle } from "@/components/shared/rotating-text-circle";

interface ScrollDownProps {
  show: boolean;
}

export const ScrollDown: FunctionComponent<ScrollDownProps> = ({ show }) => {
  return (
    <motion.div
      className="origin-bottom"
      initial={false}
      animate={
        show
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: -40,
            }
      }
      transition={{
        type: "spring",
        bounce: 0.25,
        delay: WAVE_DURATION,
      }}
    >
      <RotatingTextCircle text="SCROLL DOWN" />
    </motion.div>
  );
};
