/**
 * @fileoverview eslint plugin for xxx
 * @author xjiaxiang
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

// export config
module.exports.configs = {
  recommended: {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      },
      project: "./tsconfig.json"
    },
    env: {
      browser: true,
      node: true,
      jest: true,
      commonjs: true,
      es6: true,
      mongo: true,
      shelljs: true
    },
    plugins: ["react-hooks", "@typescript-eslint", "html"],
    extends: [
      // eslint
      "eslint:recommended",
      // node
      "plugin:node/recommended",
      // import
      "plugin:import/recommended",
      "plugin:import/typescript",
      // promise
      "plugin:promise/recommended",
      // comments
      "plugin:eslint-comments/recommended",
      // unicorn
      "plugin:unicorn/recommended",
      // react
      "plugin:react/recommended",
      // typescript
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      // jest
      "plugin:jest/recommended",
      // compat
      "plugin:compat/recommended",
      // prettier
      "plugin:prettier/recommended",
      "prettier/react",
      "prettier/standard",
      "prettier/@typescript-eslint"
    ],
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    },
    settings: {
      // TODO: modify some day
      "import/resolver": {
        webpack: true
      },
      "import/extensions": [".ts", "tsx", ".js", ".jsx", ".json"],
      // add polyfills
      polyfills: {

      }
    }
  }
};
