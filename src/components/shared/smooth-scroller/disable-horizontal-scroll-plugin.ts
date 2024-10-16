import { ScrollbarPlugin } from "smooth-scrollbar";

interface Delta {
  x: number;
  y: number;
}

export class DisableHorizontalScrollPlugin extends ScrollbarPlugin {
  static pluginName = "disableHorizontalScroll";
  transformDelta(delta: Delta): Delta {
    return { ...delta, x: 0 };
  }
}
