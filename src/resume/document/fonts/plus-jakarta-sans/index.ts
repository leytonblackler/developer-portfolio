import path from "node:path";
import { fileURLToPath } from "node:url";
import { Font } from "@react-pdf/renderer";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

/**
 * Register the Plus Jakarta Sans fonts.
 *
 * Note that react-pdf does not support variables fonts, and only supports
 * TTF, so each weight and style must be registered individually.
 *
 * From 'static' folder in zip downloaded from:
 * https://fonts.google.com/specimen/Plus+Jakarta+Sans
 */
export const registerPlusJakartaSansFonts = (): void => {
  Font.register({
    family: "Plus Jakarta Sans",
    fonts: [
      // Extra Light (200)
      {
        fontWeight: 200,
        fontStyle: "normal",
        src: path.join(__dirname, "./PlusJakartaSans-ExtraLight.ttf"),
      },
      {
        fontWeight: 200,
        fontStyle: "italic",
        src: path.join(__dirname, "./PlusJakartaSans-ExtraLightItalic.ttf"),
      },
      // Light (300)
      {
        fontWeight: 300,
        fontStyle: "normal",
        src: path.join(__dirname, "./PlusJakartaSans-Light.ttf"),
      },
      {
        fontWeight: 300,
        fontStyle: "italic",
        src: path.join(__dirname, "./PlusJakartaSans-LightItalic.ttf"),
      },
      // Regular (400)
      {
        fontWeight: 400,
        fontStyle: "normal",
        src: path.join(__dirname, "./PlusJakartaSans-Regular.ttf"),
      },
      {
        fontWeight: 400,
        fontStyle: "italic",
        src: path.join(__dirname, "./PlusJakartaSans-Italic.ttf"),
      },
      // Medium (500)
      {
        fontWeight: 500,
        fontStyle: "normal",
        src: path.join(__dirname, "./PlusJakartaSans-Medium.ttf"),
      },
      {
        fontWeight: 500,
        fontStyle: "italic",
        src: path.join(__dirname, "./PlusJakartaSans-MediumItalic.ttf"),
      },
      // Semi Bold (600)
      {
        fontWeight: 600,
        fontStyle: "normal",
        src: path.join(__dirname, "./PlusJakartaSans-SemiBold.ttf"),
      },
      {
        fontWeight: 600,
        fontStyle: "italic",
        src: path.join(__dirname, "./PlusJakartaSans-SemiBoldItalic.ttf"),
      },
      // Bold (700)
      {
        fontWeight: 700,
        fontStyle: "normal",
        src: path.join(__dirname, "./PlusJakartaSans-Bold.ttf"),
      },
      {
        fontWeight: 700,
        fontStyle: "italic",
        src: path.join(__dirname, "./PlusJakartaSans-BoldItalic.ttf"),
      },
      // Extra Bold (800)
      {
        fontWeight: 800,
        fontStyle: "normal",
        src: path.join(__dirname, "./PlusJakartaSans-ExtraBold.ttf"),
      },
      {
        fontWeight: 800,
        fontStyle: "italic",
        src: path.join(__dirname, "./PlusJakartaSans-ExtraBoldItalic.ttf"),
      },
    ],
  });
};
