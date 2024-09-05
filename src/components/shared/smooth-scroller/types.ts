import { type MotionValue } from "framer-motion";
import { type RefObject } from "react";

export interface ScrollInstanceMotionValues {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export interface ScrollInstance {
  ref: RefObject<HTMLDivElement>;
  motionValues: ScrollInstanceMotionValues;
}
