/**
 * Evaluates the radius of a bubble based on its importance and the maximum
 * radius of a bubble.
 */
export const evaluateRadius = ({
  importance,
  minImportance,
  maxImportance,
  maxIdleBubbleRadius,
}: {
  importance: number;
  minImportance: number;
  maxImportance: number;
  maxIdleBubbleRadius: number;
}): number => {
  // TODO: Normalize importance value with min and max importance
  return Math.min(
    maxIdleBubbleRadius,
    maxIdleBubbleRadius * (1 / importance) * 1.5
  );
};
