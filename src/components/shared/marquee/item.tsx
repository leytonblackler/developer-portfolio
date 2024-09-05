import { type MotionValue } from "framer-motion";
import {
  type FunctionComponent,
  type ReactNode,
  useEffect,
  useRef,
} from "react";
import { useRafLoop } from "react-use";
import { cn } from "@/utils/styling/cn";

export const MarqueeItem: FunctionComponent<{
  children: ReactNode;
  className?: string;
  speed: MotionValue;
  containerSize: { width?: number; height?: number };
}> = ({ children, className = undefined, speed, containerSize }) => {
  const item = useRef<HTMLDivElement | null>(null);
  const rect = useRef<DOMRect | null>(null);
  const x = useRef(0);

  const { width: containerWidth, height: containerHeight } = containerSize;

  const setX = (): void => {
    if (!item.current || !rect.current) return;
    const xPercentage = (x.current / rect.current.width) * 100;
    if (xPercentage < -100) x.current = 0;
    if (xPercentage > 0) x.current = -rect.current.width;
    item.current.style.transform = `translate3d(${xPercentage}%, 0, 0)`;

    // if (x.current < -rect.current.width) x.current = 0;
    // if (x.current > 0) x.current = -rect.current.width;
    // item.current.style.transform = `translate3d(${x.current}px, 0, 0)`;
  };

  useEffect(() => {
    if (item.current) {
      rect.current = item.current.getBoundingClientRect();
    }
  }, [containerWidth, containerHeight]);

  // const buffer = useRef(0);
  const loop = (): void => {
    x.current -= speed.get();
    setX();

    // const delta = (e - buffer.current) / 1000;
    // const c = Math.max(1 / 60 / delta, 1);
    // buffer.current = e;
    // x.current -= speed.get() / c;
    // setX();
  };

  useRafLoop(loop, true);

  return (
    <div className={cn("h-full", className)} ref={item}>
      {children}
    </div>
  );
};
