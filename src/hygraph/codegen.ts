import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.HYGRAPH_API_URL,
  documents: [
    "src/hygraph/queries/**/*.graphql",
    "src/hygraph/mutations/**/*.graphql",
  ],
  generates: {
    "./src/hygraph/generated/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: "getFragmentData" }, // Renamed from useFragment to avoid issues with ESLint detecting it as a hook
      },
    },
  },
};

// eslint-disable-next-line import/no-default-export -- Config must be the default export
export default config;
