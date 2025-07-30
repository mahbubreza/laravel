import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: { globals: globals.browser },
    },
    {
        extends: ["eslint:recommended", "plugin:prettier/recommended"],
        plugins: ["prettier"],
        rules: {
            "prettier/prettier": "error",
        },
    },

    pluginReact.configs.flat.recommended,
]);
