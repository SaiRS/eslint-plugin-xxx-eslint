# eslint-plugin-xxx-eslint

eslint plugin for xxx

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint @typescript-eslint/eslint-plugin eslint-config-prettier eslint-import-resolver-webpack eslint-plugin-compat eslint-plugin-html eslint-plugin-import eslint-plugin-jest eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unicorn --save-dev

```

Next, install `eslint-plugin-xxx-eslint`:

```
$ npm install eslint-plugin-xxx-eslint --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-xxx-eslint` globally.

## Usage

configure the rules you want to use under the rules section.

```json
{
  "extends": [
    "plugin:xxx-eslint/recommended"
  ]
}
```

## Supported Rules

* Fill in provided rules here


## Note
1. we support typescript by default, so make sure you have `tsconfig.json`, and override `project` in parserOption filed of `eslintrc.js` file
```
  "parserOptions": {
    "project": "./tsconfig.json"
  },
```
2. as the [problem](https://github.com/eslint/eslint/issues/3458)discussed about the inconvenient, we use the hack solution as mentioned in [this reply](https://github.com/eslint/eslint/issues/3458#issuecomment-516716165)

```javascript
const path = require('path');

let currentModule = module;
while (!/[\\/]eslint[\\/]lib[\\/]cli-engine[\\/]config-array-factory\.js/i.test(currentModule.filename)) {
  if (!currentModule.parent) {
    // This was tested with ESLint 6.1.0; other versions may not work
    throw new Error('Failed to patch ESLint because the calling module was not recognized');
  }
  currentModule = currentModule.parent;
}
const eslintFolder = path.join(path.dirname(currentModule.filename), '../..');

const configArrayFactoryPath = path.join(eslintFolder, "lib/cli-engine/config-array-factory");
const configArrayFactoryModule = require(configArrayFactoryPath);

const moduleResolverPath = path.join(eslintFolder, "lib/shared/relative-module-resolver");
const ModuleResolver = require(moduleResolverPath);

const originalLoadPlugin = configArrayFactoryModule.ConfigArrayFactory.prototype._loadPlugin;
configArrayFactoryModule.ConfigArrayFactory.prototype._loadPlugin = function(name, importerPath, importerName) {
  const originalResolve = ModuleResolver.resolve;
  try {
    ModuleResolver.resolve = function (moduleName, relativeToPath) {
      // resolve using importerPath instead of relativeToPath
      return originalResolve.call(this, moduleName, importerPath);
    };
    return originalLoadPlugin.apply(this, arguments);
  } finally {
    ModuleResolver.resolve = originalResolve;
  }
}
```





