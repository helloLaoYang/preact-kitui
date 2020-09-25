module.exports = {
    env: {
        browser: true,
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "airbnb-base",
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
        jsx: true,
        },
        project: "./tsconfig.eslint.json",
    },
    rules: {
        indent: [
        "error",
        2,
        {
            SwitchCase: 1,
        },
        ],
        semi: ["error", "never"],
        "func-call-spacing": ["error", "never"],
        "react/no-unknown-property": ["error", { ignore: ["class"] }],
        "no-multiple-empty-lines": [
        "error",
        {
            max: 1,
        },
        ],
        "import/no-unresolved": "off",
        "import/no-extraneous-dependencies": "off",
        "import/extensions": "off",
        "react/no-array-index-key": ["error"],
        "react/no-unknown-property": ["error", {}],
        "react/jsx-wrap-multilines": ["error", {
            "declaration": "parens-new-line",
            "assignment": "parens-new-line",
            "return": "parens-new-line",
            "arrow": "parens-new-line",
            "condition": "parens-new-line",
            "logical": "parens-new-line",
            "prop": "parens-new-line",
        }],
        "react/jsx-curly-spacing": ["error", {
            "when": "always",
            "spacing": {
            "objectLiterals": "never"
            },
            "children": true
        }],
    },
    globals: {
        wx: "readonly",
        AMap: "readonly",
        WebViewJavascriptBridge: "readonly",
        QRCode: "readonly",
    },
    settings: {
        react: {
        pragma: "h",
        version: "latest",
        },
    },
    overrides: [
        {
        files: ["*.js"],
        rules: {
            "@typescript-eslint/explicit-function-return-type": "off",
        },
        },
    ],
}
