"use client";

import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type FunctionComponent,
} from "react";
import { motion } from "framer-motion";
import { useResizeDetector } from "react-resize-detector";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";
import {
  HEADING_CHARACTER_ANIMATION_DURATION,
  HEADING_CHARACTER_ANIMATION_STAGGER,
  HERO_REPOSITION_DURATION,
  SUBHEADING_DELAY,
} from "./constants";
import { useHeroEntryContext } from "./entry-provider/use-hero-context";
import { cn } from "@/utils/styling/cn";
import { ROUTE_CHANGE_ANIMATION_DURATION } from "@/components/page-animation/constants";

interface HeroProps {
  heading: string;
  subHeading: string;
  large?: boolean;
  reposition?: boolean;
}

export const Hero: FunctionComponent<HeroProps> = ({
  heading,
  subHeading,
  large = false,
  reposition = false,
}) => {
  /**
   * Create a reference to the container element.
   */
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * Observe the content width and height.
   */
  const { ref: contentRef, height: contentHeight } =
    useResizeDetector<HTMLDivElement>();

  /**
   * Access the hero entry context.
   */
  const { heroHasEntered, setHeroHasEntered } = useHeroEntryContext();

  /**
   * Track when the subheading has finished animating.
   */
  const [subheadingHasEntered, setSubheadingHasEntered] =
    useState<boolean>(false);

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

  const [relativeVerticalCenter, setRelativeVerticalCenter] = useState(0);

  /**
   * Calculate the vertical center of the screen relative to the container
   * after it has initially mounted.
   */
  useLayoutEffect(() => {
    setRelativeVerticalCenter(containerRef.current?.clientHeight ?? 0 / 2);
  }, [contentHeight]);

  /**
   * Set in the context that the hero has fully entered after the duration for
   * the repositioning of the hero (if applicable) once the subheading has
   * finished entering
   */
  useEffect(() => {
    if (subheadingHasEntered && !heroHasEntered) {
      setTimeout(
        () => {
          setHeroHasEntered(true);
          /**
           * Convert the duration to milliseconds.
           */
        },
        reposition ? HERO_REPOSITION_DURATION * 1000 : 0
      );
    }
  }, [subheadingHasEntered, heroHasEntered, reposition, setHeroHasEntered]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full")}
      style={{ height: contentHeight }}
    >
      <motion.div
        ref={contentRef}
        initial={false}
        animate={
          !reposition || subheadingHasEntered
            ? {
                position: "absolute",
                top: 0,
              }
            : {
                position: "absolute",
                top: `calc(50dvh - ${relativeVerticalCenter}px)`,
              }
        }
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: HERO_REPOSITION_DURATION,
        }}
        className={cn("mx-auto box-border w-dvw max-w-7xl", "absolute")}
      >
        <div
          className={cn(
            "mx-auto box-border w-full",
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
            onAnimationComplete={() => {
              setSubheadingHasEntered(true);
            }}
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
        </div>
      </motion.div>
    </div>
  );
};
