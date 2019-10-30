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
  {
    settings: {
      // 统一使用typescript,webpack中的也是用tsconfig.json中的配置
      "import/resolver": {
        typescript: "./tsconfig.json"
      }
    }
  },
  //  prettier
  require("eslint-config-prettier/@typescript-eslint")
);
