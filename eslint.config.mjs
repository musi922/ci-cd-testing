import globals from "globals";
import eslint from "@eslint/js";
import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import markdown from "eslint-plugin-markdown";
import * as regexp from "eslint-plugin-regexp";
import yml from "eslint-plugin-yml";
import cds from "@sap/eslint-plugin-cds";

export default [
  {
    ignores: [
      "app/*/dist/**",
      "app/**/test/**",
      "app/**/localService/**",
      "eslint.config.mjs",
      "gen/**",
      "test/**",
      "srv/external/**",
      "srv/backend-service/**"
    ],
  },
  {
    languageOptions: { sourceType: "commonjs" },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        sap: "readonly",
        jQuery: "readonly",
        SELECT: "readonly",
        INSERT: "readonly",
        UPDATE: "readonly",
        DELETE: "readonly",
        UPSERT: "readonly",
        clients: "readonly",
      },
    },
  },
  eslint.configs.recommended,
  {
    rules: {
      "no-var": "error",
    },
  },
  ...markdown.configs.recommended,
  ...yml.configs["flat/recommended"],
  {
    rules: {
      "yml/no-empty-mapping-value": "off",
    },
  },
  ...yml.configs["flat/prettier"],
  comments.recommended,
  regexp.configs["flat/recommended"],
  cds.configs.recommended,
  {
    plugins: {
      "@sap/cds": cds,
    },
    files: [...cds.configs.recommended.files],
    rules: {
      ...cds.configs.recommended.rules,
      "@sap/cds/start-entities-uppercase": "error",
      "@sap/cds/start-elements-lowercase": "error",
    },
  },
];