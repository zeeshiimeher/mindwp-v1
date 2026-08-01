import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";

/**
 * Library-local flat config. Entirely separate from the website's
 * `eslint.config.mjs`, which ignores `library/**` and is never modified here.
 *
 * Calibrated for a laboratory rather than a production application. A rule
 * earns "error" only if it catches something that is actually broken —
 * a stale hook dependency, an unreachable interactive control, a leaked
 * `<img>` in a Next app. Anything that is merely a matter of taste is left
 * alone, because visual experimentation is the point of this application and a
 * config that punishes a half-finished idea would be working against it.
 * Formatting belongs to Prettier and is not represented here at all.
 */
export default [
  {
    ignores: [
      ".next/**",
      ".next-dev/**",
      "node_modules/**",
      "screenshots/**",
      "next-env.d.ts",
      // Owned by the concurrent research task.
      "README.md",
      "planning/**",
    ],
  },

  js.configs.recommended,

  // Node-side tooling: config files and the capture script.
  //
  // Browser globals are included deliberately. The capture script is a Node
  // program, but the bodies of its `page.evaluate()` callbacks are serialised
  // and executed inside the page, so `document` and `requestAnimationFrame` are
  // genuinely in scope there. Declaring both is more truthful than switching
  // `no-undef` off for the file.
  {
    files: ["*.config.mjs", "scripts/**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.node, ...globals.browser },
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
    plugins: { "simple-import-sort": simpleImportSort },
  },

  // Application source.
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: { ...globals.browser, React: "readonly" },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      "@next/next": nextPlugin,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // TypeScript already resolves identifiers and unused values better than
      // the core rules can, so the core versions are noise here.
      "no-undef": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
      ],
      // A warning, not an error: a spike sometimes needs an escape hatch, and
      // the point is to notice it rather than to be blocked by it.
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",

      // Real bugs. A stale dependency array in a scroll-driven section produces
      // an animation bound to values that no longer exist, which is exactly the
      // class of failure this laboratory would otherwise ship into a page.
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",

      // Accessibility failures that break the section for a real reader.
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/img-redundant-alt": "error",
      "jsx-a11y/no-redundant-roles": "error",
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",
      "jsx-a11y/label-has-associated-control": "error",
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/no-noninteractive-element-interactions": "warn",
      "jsx-a11y/click-events-have-key-events": "warn",

      // Next.js mistakes that are silently wrong rather than loudly wrong.
      "@next/next/no-html-link-for-pages": "off", // no `pages/` directory here
      "@next/next/no-img-element": "error",
      "@next/next/no-sync-scripts": "error",
      "@next/next/no-head-element": "error",
      "@next/next/no-page-custom-font": "error",
      "@next/next/no-assign-module-variable": "error",

      // React correctness the compiler will not catch.
      "no-console": ["warn", { allow: ["warn", "error"] }],

      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
];
