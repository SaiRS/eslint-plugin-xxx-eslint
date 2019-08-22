# eslint-plugin-xxx-eslint

eslint plugin for xxx

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
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
1. we support typescript by default, so make sure you have `tsconfig.json` in the same directory of `eslintrc.js`, as we set the parser config 
```
  "parserOptions": {
    "project": "./tsconfig.json"
  },
``` 



