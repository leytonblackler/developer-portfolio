import { type FunctionComponent } from "react";
import { getEmojiSvgLocation } from "@/utils/emoji/get-emoji-svg-filename";

export const NotoColorEmoji: FunctionComponent<{
  children: string;
  alt: string;
  height: number;
}> = ({ children: emoji, height, alt }) => (
  <img
    src={getEmojiSvgLocation(emoji)}
    alt={alt}
    className="w-auto align-middle"
    style={{ height }}
  />
);
