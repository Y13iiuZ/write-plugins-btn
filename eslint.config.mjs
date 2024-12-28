import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

/**
 * @type {import("@eslint/eslintrc").Linter.Config}
 */

export default [{
    ignores: ["**/node_modules/", "coverage/*", "dist/*", "node_modules/*"],
    languageOptions: {
        parser: js.parser,
        parserOptions: {
            ecmaVersion: "latest",
            sourceType: "module"
        }
    },
    rules: {
        "no-undef": 'off',
    }
}, ...compat.extends("eslint:recommended")];