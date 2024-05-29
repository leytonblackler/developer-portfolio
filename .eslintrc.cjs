const { resolve } = require("node:path");

/**
 * Resolve the path for the tsconfig.json file within the working directory.
 */
const tsConfigPath = resolve(process.cwd(), "tsconfig.json");

/**
 * Import the tsconfig.json file as an object to obtain the exclusions.
 */
const tsConfig = require(tsConfigPath);

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: "./",
  },
  ignorePatterns: tsConfig?.exclude ?? undefined,
  plugins: ["prettier", "eslint-plugin-comment-length", "react-refresh"],
  extends: [
    require.resolve("@vercel/style-guide/eslint/node"),
    require.resolve("@vercel/style-guide/eslint/typescript"),
    require.resolve("@vercel/style-guide/eslint/react"),
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "plugin:comment-length/recommended",
    "plugin:tailwindcss/recommended",
  ],
  settings: {
    tailwindcss: {
      callees: ["clsx", "cn", "cva"],
      removeDuplicates: true,
      skipClassAttribute: false,
    },
  },
  rules: {
    /**
     * Enforce Prettier formatting.
     */
    "prettier/prettier": "error",

    /**
     * Allow console logs.
     */
    "no-console": "warn",

    /**
     * Allow custom classnames in additional to Tailwind classes - this is
     * necessary due to the plugin not detecting some custom class names added
     * to the Tailwind config.
     */
    "tailwindcss/no-custom-classname": "off",

    /**
     * Allow HTML links for page.
     */
    "@next/next/no-html-link-for-pages": "off",

    /**
     * Allow non-string variables in string interpolation.
     */
    "@typescript-eslint/restrict-template-expressions": "off",

    /**
     * Prefer named imports.
     */
    "import/no-default-export": "error",
    "import/prefer-default-export": "off",

    /**
     * Enforce arrow function style for all component definitions.
     */
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],

    /**
     * Don't warn when a constant (string, number, boolean, templateLiteral) is
     * exported aside one or more components.
     */
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  overrides: [
    /**
     * Allow default exports for files in the app directory, except the api
     * subdirectory, since pages require default exports but api routes do
     * not.
     */
    {
      files: ["src/app/**/*"],
      rules: {
        "import/no-default-export": "off",
        "import/prefer-default-export": [
          "error",
          {
            target: "any",
          },
        ],
      },
    },
    {
      files: ["src/app/api/**/*"],
      rules: {
        "import/no-default-export": "error",
        "import/prefer-default-export": "off",
      },
    },
  ],
};
