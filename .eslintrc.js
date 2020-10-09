module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },

  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
}
