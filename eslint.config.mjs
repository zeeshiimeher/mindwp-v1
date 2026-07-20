import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/**
 * Flat config built from explicitly-installed plugins (no eslint-config-next).
 * TypeScript handles undefined-var checking, so core no-undef/no-unused are off.
 */
export default [
  {
    ignores: [
      ".next/**",
      ".worktrees/**",
      "_dev-reference/**",
      "library/**",
      "node_modules/**",
      "next-env.d.ts",
      "*.config.*",
      "scripts/**",
      "public/**",
    ],
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-is-valid": "warn",
    },
  },
];
