import { type MotionValue } from "framer-motion";
import { type FunctionComponent } from "react";

export interface ModelState<T> {
  position: {
    y: T;
  };
  rotation: {
    x: T;
    y: T;
    z: T;
  };
}

export type ModelComponent = FunctionComponent<
  {
    onReady: () => void;
    ready: boolean;
    scale: number;
  } & ModelState<MotionValue>
>;
