import {
  type ReactNode,
  useRef,
  type FunctionComponent,
  useEffect,
} from "react";
import {
  motion,
  type MotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRafLoop } from "react-use";
import { useResizeDetector } from "react-resize-detector";
import { MarqueeItem } from "./item";
import { cn } from "@/utils/styling/cn";

const SPEED = 2.5;

/**
 * Refer to:
 * https://www.14islands.com/journal/interactive-marquee-with-framer-motion
 */
export const Marquee: FunctionComponent<{
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  active?: boolean;
}> = ({
  children,
  className = undefined,
  contentClassName = undefined,
  active = true,
}) => {
  const marquee = useRef<HTMLDivElement | null>(null);

  /**
   * Detect changes to the width and height of the container element.
   */
  const { ref: containerRef, ...containerSize } =
    useResizeDetector<HTMLDivElement>();

  const x = useRef(0);

  const speed = useSpring(0, {
    damping: 50,
    stiffness: 140,
    mass: 1,
  }) as MotionValue<number>;

  const skewX = useTransform(
    speed,
    [-(containerSize.width ?? 0) * 0.25, 0, (containerSize.width ?? 0) * 0.25],
    [-25, 0, 25]
  );

  useEffect(() => {
    speed.set(active ? SPEED : 0);
  }, [active, speed]);

  const loop = (): void => {
    if (active) {
      x.current *= 0.66;
      if (x.current < 0) {
        x.current = Math.min(x.current, 0);
      } else {
        x.current = Math.max(x.current, 0);
      }
      speed.set(SPEED + x.current);
    }
  };

  useRafLoop(loop, true);

  return (
    <div className={cn("relative size-full", className)} ref={containerRef}>
      <motion.div
        className="flex size-full items-center"
        ref={marquee}
        style={{ skewX }}
      >
        <MarqueeItem
          speed={speed}
          containerSize={containerSize}
          className={contentClassName}
        >
          {children}
        </MarqueeItem>
        <MarqueeItem
          speed={speed}
          containerSize={containerSize}
          className={contentClassName}
        >
          {children}
        </MarqueeItem>
        <MarqueeItem
          speed={speed}
          containerSize={containerSize}
          className={contentClassName}
        >
          {children}
        </MarqueeItem>
      </motion.div>
    </div>
  );
};
