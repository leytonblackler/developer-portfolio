import random from "lodash/random";
import round from "lodash/round";
import { type KeyValuePair } from "tailwindcss/types/config";

interface GlitchKeyframesOptions {
  steps: number;
}

export const generateGlitchKeyframes = ({
  steps,
}: GlitchKeyframesOptions): KeyValuePair<string, KeyValuePair> =>
  Object.fromEntries(
    [...Array(steps).keys()].map((step) => [
      `${round(step * (1 / steps) * 100)}%`,
      {
        clipPath: `inset(${random(0, 75, false)}% 0 ${random(
          0,
          75,
          false
        )}% 0)`,
      },
    ])
  );
