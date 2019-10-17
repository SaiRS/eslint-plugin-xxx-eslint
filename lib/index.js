/**
 * @fileoverview eslint plugin for xxx
 * @author xjiaxiang
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
// module.exports.rules = requireIndex(__dirname + "/rules");

// solve eslint plugin import problem
// we want import plugin from this package's node_modules, but now eslint didn't support it.
// more info: https://github.com/eslint/eslint/issues/3458#issuecomment-516716165
// const path = require("path");

// let currentModule = module;
// while (
//   !/[\\/]eslint[\\/]lib[\\/]cli-engine[\\/]config-array-factory\.js/i.test(
//     currentModule.filename
//   )
// ) {
//   if (!currentModule.parent) {
//     // This was tested with ESLint 6.1.0; other versions may not work
//     throw new Error(
//       "Failed to patch ESLint because the calling module was not recognized"
//     );
//   }
//   currentModule = currentModule.parent;
// }
// const eslintFolder = path.join(path.dirname(currentModule.filename), "../..");

// const configArrayFactoryPath = path.join(
//   eslintFolder,
//   "lib/cli-engine/config-array-factory"
// );
// const configArrayFactoryModule = require(configArrayFactoryPath);

// const moduleResolverPath = path.join(
//   eslintFolder,
//   "lib/shared/relative-module-resolver"
// );
// const ModuleResolver = require(moduleResolverPath);

// const originalLoadPlugin =
//   configArrayFactoryModule.ConfigArrayFactory.prototype._loadPlugin;
// configArrayFactoryModule.ConfigArrayFactory.prototype._loadPlugin = function(
//   name,
//   importerPath,
//   importerName
// ) {
//   const originalResolve = ModuleResolver.resolve;
//   try {
//     ModuleResolver.resolve = function(moduleName, relativeToPath) {
//       // resolve using importerPath instead of relativeToPath
//       return originalResolve.call(this, moduleName, importerPath);
//     };
//     return originalLoadPlugin.apply(this, arguments);
//   } finally {
//     ModuleResolver.resolve = originalResolve;
//   }
// };

// export config
module.exports.configs = {
  recommended: {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      }
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
    plugins: ["react-hooks", "html"],
    extends: [
      // eslint
      "eslint:recommended",
      // node
      "plugin:node/recommended",
      // import
      "plugin:import/recommended",
      // promise
      "plugin:promise/recommended",
      // comments
      "plugin:eslint-comments/recommended",
      // unicorn
      "plugin:unicorn/recommended",
      // react
      "plugin:react/recommended",
      // jest
      "plugin:jest/recommended",
      // compat
      "plugin:compat/recommended",
      // prettier
      // eslint-plugin-prettier的缩写
      "plugin:prettier/recommended",
      // eslint-config-prettier的缩写
      "prettier/react",
      "prettier/standard"
    ],
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "node/no-unsupported-features/es-syntax": [
        "error",
        {
          ignores: ["modules"]
        }
      ],
      "node/no-missing-import": [
        "error",
        {
          tryExtensions: [".js", ".json", ".node", ".ts", ".tsx", ".jsx"]
        }
      ],
      "require-jsdoc": [
        "error",
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: true,
            ArrowFunctionExpression: true,
            FunctionExpression: true
          }
        }
      ],
      "valid-jsdoc": "error"
    },
    settings: {
      // TODO: modify some day
      "import/resolver": {
        webpack: true
      },
      "import/extensions": [".ts", "tsx", ".js", ".jsx", ".json"],
      react: {
        version: "detect"
      },
      // add polyfills
      polyfills: [
        // 解决Object is not iterable的error
        "Promise"
      ]
    }
  },
  typescript: require("./typescript")
};
