import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    // ✅ Your custom overrides
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",       // or "warn"
      "react/no-unescaped-entities": "off",              // or "warn"
      "@next/next/no-img-element": "warn",               // optional
      "@typescript-eslint/no-unused-vars": "warn",       // optional
    },
  },
];

export default eslintConfig;
