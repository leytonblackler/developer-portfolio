import type { Config } from "tailwindcss";
import containerQueriesPlugin from "@tailwindcss/container-queries";
import { type Entries } from "type-fest";
import { pagesConfig } from "./src/config/pages";

// eslint-disable-next-line import/no-default-export -- Tailwind config must be the default export.
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pages: Object.fromEntries(
          (Object.entries(pagesConfig) as Entries<typeof pagesConfig>)
            .flatMap(([pageId, config]) =>
              config.colors === null ? [] : [{ pageId, colors: config.colors }]
            )
            .map(({ pageId, colors }) => {
              return [
                pageId,
                {
                  ...colors,
                },
              ];
            })
        ),
      },
      screens: {
        xs: "475px",
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
    },
  },
  plugins: [containerQueriesPlugin],
} satisfies Config;
