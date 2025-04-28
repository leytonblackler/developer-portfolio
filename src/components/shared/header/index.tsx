"use client";

import { type FunctionComponent } from "react";
import { motion, useTransform } from "framer-motion";
import useMeasure from "react-use-measure";
import { useScrollMotionValues } from "../smooth-scroller/use-scroll-motion-values";
import { Navigation } from "./navigation";
import { Logo } from "./logo";
import { HeaderContext } from "./context";
import { cn } from "@/utils/styling/cn";
import { ScrollInstanceId } from "@/constants/scroll-instance-ids";

export const Header: FunctionComponent = () => {
  /**
   * Measure the bounding client rect of the header element.
   */
  const [measureHeaderRef, headerRect] = useMeasure();

  /**
   * Access the scroll instance for the main scroll container.
   */
  const { y: scrollY } = useScrollMotionValues(ScrollInstanceId.Main);

  const visibilityDelta = useTransform(
    () => 1 - Math.min(Math.max(scrollY.get() - 40, 0), 100) / 100
  );

  const scale = useTransform(() => 0.9 + 0.1 * visibilityDelta.get());

  const translateY = useTransform(
    () => `-${(1 - visibilityDelta.get()) * 40}%`
  );

  return (
    <motion.header
      ref={measureHeaderRef}
      style={{
        scale,
        translateY,
        opacity: visibilityDelta,
      }}
      className={cn("fixed", "inset-x-0 top-6 z-20")}
    >
      <HeaderContext.Provider value={{ headerRect }}>
        <div
          className={cn(
            "relative",
            "flex flex-row",
            "items-center justify-between",
            "mx-auto w-full max-w-6xl",
            "pl-10 pr-8",
            "h-16"
          )}
        >
          <Logo className={cn("shrink-0", "size-10", "hero-text-primary")} />
          <Navigation />
        </div>
      </HeaderContext.Provider>
    </motion.header>
  );
};
