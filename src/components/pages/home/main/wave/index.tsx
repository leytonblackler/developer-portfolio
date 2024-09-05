"use client";

import { motion } from "framer-motion";
import { type FunctionComponent } from "react";

export const WaveEmoji: FunctionComponent = () => (
  <motion.span
    className="mb-12 origin-center font-emoji text-6xl"
    animate={{
      rotate: [0, -15, -5, -15, 0],
      x: [0, -15, -10, -15, 0],
      y: [0, 15, 10, 15, 0],
    }}
    transition={{
      type: "tween",
      ease: "easeOut",
      repeat: Infinity,
      duration: 1,
      delay: 2,
      repeatDelay: 30,
    }}
  >
    👋
  </motion.span>
);
