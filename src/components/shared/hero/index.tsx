"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type FunctionComponent,
} from "react";
import { motion } from "framer-motion";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";
import {
  HEADING_CHARACTER_ANIMATION_DURATION,
  HEADING_CHARACTER_ANIMATION_STAGGER,
  SUBHEADING_DELAY,
} from "./constants";
import { useHeroContext } from "./provider/use-hero-context";
import { cn } from "@/utils/styling/cn";
import { ROUTE_CHANGE_ANIMATION_DURATION } from "@/components/page-animation/constants";

interface HeroProps {
  heading: string;
  subHeading: string;
  large?: boolean;
}

export const Hero: FunctionComponent<HeroProps> = ({
  heading,
  subHeading,
  large = false,
}) => {
  /**
   * Access the hero context.
   */
  const { setHeroHasEntered } = useHeroContext();

  /**
   * Track whether the hero is to be shown.
   */
  const [show, setShow] = useState<boolean>(false);

  /**
   * Show the hero after a delay.
   */
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
      /**
       * Convert the duration to milliseconds.
       */
    }, ROUTE_CHANGE_ANIMATION_DURATION.ENTER * 1000 * 0.5);
  });

  const animate = useMemo<"initial" | "enter">(
    () => (show ? "enter" : "initial"),
    [show]
  );

  /**
   * Record in the hero context when the hero has entered.
   */
  const onAnimationComplete = useCallback(() => {
    setHeroHasEntered(true);
  }, [setHeroHasEntered]);

  return (
    <motion.div
      className={cn(
        "w-full",
        "flex flex-col",
        "items-center justify-center text-center",
        "px-4 pb-20",
        large ? "gap-y-7" : "gap-y-4"
      )}
    >
      <Heading large={large} animate={animate}>
        {heading}
      </Heading>
      <SubHeading
        large={large}
        animate={animate}
        onAnimationComplete={onAnimationComplete}
        delay={
          SUBHEADING_DELAY +
          Math.min(
            HEADING_CHARACTER_ANIMATION_DURATION,
            heading.length * HEADING_CHARACTER_ANIMATION_STAGGER
          )
        }
      >
        {subHeading}
      </SubHeading>
    </motion.div>
  );
};
