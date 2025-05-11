/**
 * Evaluates the public path to an SVG emoji downloaded from the Noto Color
 * Emoji font repository using the download-noto-color-emoji.sh script.
 */
export const getEmojiSvgLocation = (emoji: string): `/emoji/${string}.svg` =>
  `/emoji/emoji_${Array.from(emoji.replace(/\uFE0F/g, ""))
    .map(
      (character: string) =>
        `u${(() => {
          const codePoint = character.codePointAt(0);
          if (codePoint === undefined) {
            throw new Error(
              `Character code point at first position is undefined for ${character}.`
            );
          }
          return codePoint;
        })().toString(16)}`
    )
    .join("_")}.svg`;
