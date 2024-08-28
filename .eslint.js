module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  rules: {
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "no-console": "off",
  },
};
