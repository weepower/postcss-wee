# PostCSS Plugin Title

[![Build Status](https://travis-ci.org/weepower/postcss-wee.svg?branch=master)](https://travis-ci.org/weepower/postcss-wee)
[![codecov](https://codecov.io/gh/weepower/postcss-wee/branch/master/graph/badge.svg)](https://codecov.io/gh/weepower/postcss-wee)


<img align="right" width="135" height="95" src="http://postcss.github.io/postcss/logo-leftp.png" title="Philosopher’s stone, logo of PostCSS">

[PostCSS] plugin that allows for defining custom at-rules to represent media queries

[PostCSS]: (https://github.com/postcss/postcss)

```css
/* before */
.foo {
    /* Input example */
}

/* after */
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('PLUGIN_NAME') ])
```

See [PostCSS] docs for examples for your environment.

Load PostCSS Variables as a PostCSS plugin:

```js
postcss([
	require('postcss-variables')({ /* options */ })
]);
```

## Options

### `option`

Type: `Object`  
Default: `{}`

This is a brief description

```js
// Code example
```