import { MotionValue } from "framer-motion";

/**
 * Creates a new motion value with the specified initial value.
 */
export const createMotionValue = (value: number): MotionValue<number> => {
  const motionValue = new MotionValue<number>();
  motionValue.set(value);
  return motionValue;
};
