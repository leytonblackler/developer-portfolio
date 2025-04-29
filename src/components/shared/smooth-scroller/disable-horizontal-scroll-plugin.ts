import { ScrollbarPlugin } from "smooth-scrollbar";

interface Delta {
  x: number;
  y: number;
}

/**
 * Explicitly disable any horizontal scrolling in the scroll container at all
 * times.
 */
export class DisableHorizontalScrollPlugin extends ScrollbarPlugin {
  static pluginName = "disableHorizontalScroll";
  transformDelta(delta: Delta): Delta {
    return { ...delta, x: 0 };
  }
}
