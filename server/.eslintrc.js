module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  plugins: ["node"],
  extends: "airbnb-base",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    quotes: ["error", "double"],
    "linebreak-style": ["off", "unix"],
    camelcase: "off",
    "no-restricted-syntax": "off",
    "max-len": "off",
    "no-param-reassign": "off",
    "no-console": "off",
    "no-plusplus": "off",
    "no-unused-vars": "off",
    "no-await-in-loop": "off",
    "no-shadow": "off",
    "comma-dangle": "off",
    "operator-linebreak": "off",
  },
};
