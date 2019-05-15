# eslint-plugin-jsspec

[![Travis](https://img.shields.io/travis/jsspec/eslint-plugin-jsspec/master.svg?logo=travis&style=for-the-badge)](https://travis-ci.org/jsspec/eslint-plugin-jsspec)
[![AppVeyor](https://img.shields.io/appveyor/ci/HookyQR/eslint-plugin-jsspec/master.svg?logo=appveyor&style=for-the-badge)](https://ci.appveyor.com/project/HookyQR/eslint-plugin-jsspec)

Mark system methods and lazy objects as valid/used

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-jsspec`:

```
$ npm install eslint-plugin-jsspec --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-jsspec` globally.

## Usage

Add `jsspec` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "jsspec"
    ]
}
```





