import { Font, StyleSheet } from "@react-pdf/renderer";
import { registerPlusJakartaSansFonts } from "./plus-jakarta-sans";

interface FontFamilyStyle {
  fontFamily: string;
}

/**
 * Registers the required fonts with react-pdf.
 */
export const registerFonts = (): {
  fontStyles: {
    "Plus Jakarta Sans": FontFamilyStyle;
  };
} => {
  /**
   * Register the Plus Jakarta Sans fonts.
   */
  registerPlusJakartaSansFonts();

  /**
   * Prevent text-wrapping with hyphens.
   */
  Font.registerHyphenationCallback((word) => [word]);

  /**
   * Generate and return font styles for the registered fonts.
   */
  return {
    fontStyles: {
      "Plus Jakarta Sans": StyleSheet.create({
        page: {
          fontFamily: "Plus Jakarta Sans",
        },
      }).page,
    },
  };
};
