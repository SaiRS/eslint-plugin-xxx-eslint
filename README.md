# eslint-plugin-xxx-eslint

eslint plugin for xxx

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint @typescript-eslint/eslint-plugin eslint-config-prettier eslint-import-resolver-webpack eslint-plugin-compat eslint-plugin-html eslint-plugin-import eslint-plugin-jest eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unicorn eslint-plugin-eslint-comments eslint-import-resolver-typescript --save-dev

```

Next, install `eslint-plugin-xxx-eslint`:

```
$ npm install eslint-plugin-xxx-eslint --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-xxx-eslint` globally.

## Usage

configure the rules you want to use under the rules section.

```js
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:xxx-eslint/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      ...require('eslint-plugin-xxx-eslint').configs.typescript,
    },
  ],
  settings: {
    // change this if you use different path
    'import/resolver': {
        typescript: {
          directory: path.resolve(__dirname, 'tsconfig.json'),
        },
    },
  }
};
```

## Supported Rules

* Fill in provided rules here





