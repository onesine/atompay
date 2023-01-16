module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    globals: {
        process: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:react-hooks/recommended"
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: {
            jsx: true
        },
        sourceType: "module"
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    plugins: ["react", "import", "prettier"],
    rules: {
        "linebreak-style": 0,
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "import/order": [
            "error",
            {
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true
                },
                "newlines-between": "always"
            }
        ],
        "react/prop-types": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
        "prettier/prettier": ["error", { endOfLine: "auto" }],
        "no-unused-vars": [
            "error",
            {
                varsIgnorePattern: "React"
            }
        ]
    }
};
