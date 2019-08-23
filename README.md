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
  ],
  "parserOptions": {
    // you can change this to a real path of tsconfig.json
    "project": "./tsconfig.json"
  },
}
```

## Supported Rules

* Fill in provided rules here





