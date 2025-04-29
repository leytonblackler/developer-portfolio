import { type MotionValue } from "framer-motion";
import { type RefObject } from "react";
import { type Data2d } from "smooth-scrollbar/interfaces";

export interface ScrollInstanceMotionValues {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export interface BaseScrollInstance {
  ref: RefObject<HTMLDivElement>;
  motionValues: ScrollInstanceMotionValues;
  disabled: boolean;
}

export interface ScrollInstance extends BaseScrollInstance {
  setPosition: (position: Data2d) => void;
  setDisabled: (disabled: boolean) => void;
}
