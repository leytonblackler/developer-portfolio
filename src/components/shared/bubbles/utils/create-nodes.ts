import { IDLE_SPACING } from "../constants";
import { type BubbleData, type BubbleNode } from "../types";
import { createMotionValue } from "./create-motion-value";

/**
 * Creates a set of nodes with random positions and initial values from the
 * provided data set,
 */
export const createNodes = ({
  data,
  containerWidth,
  containerHeight,
}: {
  data: BubbleData[];
  containerWidth: number;
  containerHeight: number;
}): BubbleNode[] => {
  const minY = containerHeight * 0.25;
  const maxY = containerHeight * 0.75;

  return data.map((nodeData) => ({
    ...nodeData,
    radius: createMotionValue(0),
    collisionSpacing: createMotionValue(IDLE_SPACING),
    isHovering: false,
    isPressed: false,
    isDragging: false,
    dragOrigin: null,
    x: Math.random() * containerWidth,
    y: Math.random() * (maxY - minY) + minY,
  }));
};
