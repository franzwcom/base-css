/**
* File Name: extra normalize
*/

/** @jsx jsx */
import { css } from '@emotion/core';

export const extraNormalize = css`
/**
 * A thin layer on top of normalize.css that provides a starting point more
 * suitable for web applications.
 */

/**
 * 1. Prevent padding and border from affecting element width
 *    https://goo.gl/pYtbK7.
 * 2. Change the default font family in all browsers (opinionated).
 */

html {
  box-sizing: border-box; /* 1 */
  font-family: sans-serif; /* 2 */
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

/**
 * Removes the default spacing and border for appropriate elements.
 */

blockquote,
dl,
dd,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
p,
pre {
  margin: 0;
}

button {
  background: transparent;
  border: 0;
  padding: 0;
}

/**
 * Work around a Firefox/IE bug where the transparent 'button' background
 * results in a loss of the default 'button' focus styles.
 */

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

iframe {
  border: 0;
}

ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`;