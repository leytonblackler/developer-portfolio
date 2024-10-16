"use client";

import { uniqueId } from "lodash";
import {
  type HTMLAttributes,
  useMemo,
  type CSSProperties,
  type FunctionComponent,
} from "react";
import { HiArrowNarrowDown } from "react-icons/hi";
import { useSpring, motion, useTransform } from "framer-motion";
import { useScrollMotionValues } from "../smooth-scroller/use-scroll-motion-values";
import { cn } from "@/utils/styling/cn";
import { ScrollInstanceId } from "@/constants/scroll-instance-ids";

interface RotatingTextCircleProps {
  text: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

interface CharacterWithKey {
  character: string;
  key: string;
}

const BULLET_CHAR = "•";

export const RotatingTextCircle: FunctionComponent<RotatingTextCircleProps> = ({
  text,
  className,
}) => {
  /**
   * Access the motion value for the vertical scroll position of the main
   * scroll instance.
   */
  const { y: scrollY } = useScrollMotionValues(ScrollInstanceId.Main);

  /**
   * Map the vertical scroll position to degrees of rotation.
   * (For every 1800px scrolled, perform one full rotation).
   */
  const rotation = useTransform(scrollY, [0, 1800], [0, 360], {
    clamp: false,
  });

  /**
   * Apply a spring animation to the current degrees of rotation.
   */
  const springRotation = useSpring(rotation, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.01,
  });

  /**
   * Determine whether the browser supports trigonometric functions in CSS.
   */
  const supportsTrigonometry = useMemo<boolean>(
    () => CSS.supports("(top: calc(sin(1) * 1px))"),
    []
  );

  /**
   * Duplicate the text and add separation bullets with necessary spacing.
   */
  const enhancedText = useMemo<string>(
    () => `${text} ${BULLET_CHAR} ${text} ${BULLET_CHAR} `,
    [text]
  );

  /**
   * Get the individual characters from the provided text.
   */
  const characters = useMemo<string[]>(() => {
    const quarterLength = Math.floor(enhancedText.length / 2);
    return enhancedText
      .split("")
      .slice(quarterLength)
      .concat(enhancedText.split("").slice(0, quarterLength));
  }, [enhancedText]);

  /**
   * Determine the total number of characters in the provided.
   */
  const totalCharacters = useMemo<number>(
    () => characters.length,
    [characters]
  );

  /**
   * Create a unique key for each of the characters.
   */
  const charactersWithKeys = useMemo<CharacterWithKey[]>(
    () =>
      characters.map((character) => ({
        character,
        key: uniqueId(),
      })),
    [characters]
  );

  return !supportsTrigonometry ? null : (
    <div
      className={cn(
        "pointer-events-none select-none",
        "relative",
        "font-bold",
        // "text-gray-850 dark:text-gray-100",
        "card-text-primary",
        className
      )}
      style={
        {
          "--total-characters": totalCharacters,
          "--font-size": 0.7,
          "--character-width": 1.4,
          "--inner-angle": "calc((360 / var(--total-characters)) * 1deg)",
          "--radius":
            "calc((var(--character-width) / sin(var(--inner-angle))) * 1ch)",
          fontSize: "calc(var(--font-size) * 1rem)",
          width: "calc((var(--radius) * 2) + 1ch)",
          height: "calc((var(--radius) * 2) + 1ch)",
        } as CSSProperties
      }
    >
      <div
        className={cn(
          "absolute",
          "left-1/2 top-1/2",
          "-translate-x-1/2 -translate-y-1/2",
          "rounded-full",
          "card-bg-primary",
          "card-border-primary",
          // "bg-gray-150 dark:bg-gray-925",
          "flex items-center justify-center"
        )}
        style={{
          width: "calc((var(--radius) * 2) - calc(var(--font-size) * 3rem))",
          height: "calc((var(--radius) * 2) - calc(var(--font-size) * 3rem))",
        }}
      >
        <HiArrowNarrowDown
          style={{
            width: "calc(var(--radius) / 2)",
            height: "calc(var(--radius) / 2)",
          }}
        />
      </div>
      <motion.div
        className="size-full origin-center"
        style={{
          rotate: springRotation,
        }}
      >
        <div>
          {charactersWithKeys.map(({ character, key }, index) => (
            <span
              key={key}
              className={cn(
                "absolute",
                character === BULLET_CHAR ? "opacity-30" : "opacity-100"
              )}
              style={
                {
                  "--index": index,
                  top: "calc(50% - 1ch)",
                  left: "calc(50% - 0.5ch)",
                  transform: [
                    "rotate(calc(var(--inner-angle) * var(--index) - calc((45deg + 90deg) / 2) + calc(var(--inner-angle) / 4)))",
                    "translateY(calc(var(--radius) * -1))",
                  ].join(" "),
                } as CSSProperties
              }
            >
              {character}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
