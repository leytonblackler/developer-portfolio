import { ScrollbarPlugin } from "smooth-scrollbar";

interface Delta {
  x: number;
  y: number;
}

interface Options {
  disabled: boolean;
}

/**
 * Allows toggling whether the scroll container is allowed to be scrolled.
 */
export class DisableScrollPlugin extends ScrollbarPlugin {
  static pluginName = "disableScroll";
  static defaultOptions: Options = {
    disabled: false,
  };
  transformDelta(delta: Delta): Delta {
    return (this.options as Options).disabled ? { x: 0, y: 0 } : delta;
  }
}
