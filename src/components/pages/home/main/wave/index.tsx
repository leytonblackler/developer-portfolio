"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useCallback, useEffect, type FunctionComponent } from "react";
import {
  INITIAL_WAVE_DELAY,
  WAVE_DURATION,
  WAVE_ENTER_DELAY,
  WAVE_INTERVAL,
} from "./constants";

interface WaveEmojiProps {
  show: boolean;
  onAnimationComplete: () => void;
}

export const WaveEmoji: FunctionComponent<WaveEmojiProps> = ({
  show,
  onAnimationComplete,
}) => {
  /**
   * Create animation controls for the waving animation.
   */
  const controls = useAnimationControls();

  /**
   * Starts the waving animation.
   */
  const startWaving = useCallback(
    async () =>
      controls.start({
        rotate: [0, -15, -5, -15, 0],
        x: [0, -15, -10, -15, 0],
        y: [0, 15, 10, 15, 0],
        transition: {
          type: "tween",
          ease: "easeOut",
          repeat: Infinity,
          duration: WAVE_DURATION,
          delay: WAVE_ENTER_DELAY + INITIAL_WAVE_DELAY,
          repeatDelay: WAVE_INTERVAL,
        },
      }),
    [controls]
  );

  /**
   * Stops the waving animation.
   */
  const stopWaving = useCallback(() => {
    controls.stop();
  }, [controls]);

  /**
   * Start/stop the animation when the 'show' prop changes.
   */
  useEffect(() => {
    (show ? startWaving : stopWaving)();
  }, [show, startWaving, stopWaving]);

  return (
    <motion.div
      className="mb-12 origin-bottom"
      initial={false}
      onAnimationComplete={onAnimationComplete}
      animate={
        show
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : {
              opacity: 0,
              y: 10,
              scale: 0.9,
            }
      }
      transition={{
        type: "spring",
        bounce: 0.5,
        duration: 0.5,
        delay: WAVE_ENTER_DELAY,
      }}
    >
      <motion.span
        className="inline-block origin-center font-emoji text-6xl"
        animate={controls}
      >
        👋
      </motion.span>
    </motion.div>
  );
};
