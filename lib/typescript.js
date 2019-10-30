const _ = require("lodash");

module.exports = _.merge(
  {
    plugins: ["@typescript-eslint", "import", "prettier"],
    parser: "@typescript-eslint/parser"
  },
  {
    rules: {
      // @typescript-eslint/eslint-recommended
      ...require("@typescript-eslint/eslint-plugin").configs[
        "eslint-recommended"
      ].overrides[0].rules,
      // @typescript-eslint/eslint-recommended
      ...require("@typescript-eslint/eslint-plugin").configs.recommended.rules
    },
    // import
    ...require("eslint-plugin-import").configs.typescript
  },
  //  prettier
  require("eslint-config-prettier/@typescript-eslint")
);
