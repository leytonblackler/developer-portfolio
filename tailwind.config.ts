import type { Config } from "tailwindcss";
import containerQueriesPlugin from "@tailwindcss/container-queries";
import tailwindColors from "tailwindcss/colors";
import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import defaultTheme from "tailwindcss/defaultTheme";
import hamburgersPlugin from "tailwind-hamburgers";
import { generateGlitchKeyframes } from "./src/utils/tailwind/generate-glitch-keyframes";

const { black, white, gray } = tailwindColors;

extend([mixPlugin]);
// eslint-disable-next-line import/no-default-export -- Tailwind config must be the default export.
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // pages: Object.fromEntries(
        //   (Object.entries(pagesConfig) as Entries<typeof pagesConfig>)
        //     .flatMap(([pageId, config]) =>
        // config.colors === null ? [] : [{ pageId, colors: config.colors }] )
        //     .map(({ pageId, colors }) => {
        //       return [
        //         pageId,
        //         {
        //           ...colors,
        //         },
        //       ];
        //     })
        // ),
        gray: {
          ...gray,
          25: colord(white).mix(gray[50], 0.5).toHex(),
          75: colord(gray[50]).mix(gray[100], 0.5).toHex(),
          125: colord(gray[100]).mix(gray[200], 0.5).toHex(),
          150: colord(gray[100]).mix(gray[200], 0.5).toHex(),
          225: colord(gray[200]).mix(gray[300], 0.25).toHex(),
          850: colord(gray[800]).mix(gray[900], 0.5).toHex(),
          875: colord(gray[800]).mix(gray[900], 0.75).toHex(),
          925: colord(gray[900]).mix(gray[950], 0.5).toHex(),
          975: colord(gray[950]).mix(black, 0.5).toHex(),
        },
      },
      fontSize: {
        xxs: "0.625rem",
      },
      fontFamily: {
        sans: [
          "var(--font-plus-jakarta-sans)",
          ...defaultTheme.fontFamily.sans,
        ],
        emoji: ["var(--font-noto-color-emoji)"],
      },
      screens: {
        xs: "475px",
      },
      blur: {
        xs: "2px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "3.5rem",
      },
      keyframes: {
        "glitch-1": generateGlitchKeyframes({ steps: 20 }),
        "glitch-2": generateGlitchKeyframes({ steps: 20 }),
      },
      animation: {
        "glitch-1": "glitch-1 3s linear 0s infinite alternate-reverse",
        "glitch-2": "glitch-2 3s linear 0s infinite alternate-reverse",
      },
    },
  },
  plugins: [containerQueriesPlugin, hamburgersPlugin],
} satisfies Config;
