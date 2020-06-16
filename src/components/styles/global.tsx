/**
* File Name: global
*/

/** @jsx jsx */
import { css } from '@emotion/core';


export const globalcss = css`

/* Box sizing */
* {
	box-sizing: border-box;

	&:before,
	&:after {
		box-sizing: border-box;
	}
}

html {
	/* default base size 16px  */
	font-size: var(--base-font-size);
}

html,
body {
	height: 100%;
	position: relative;
}

body,
button,
input,
select,
textarea {
	font-family: var(--latoFontFamily, var(--defaultFont));
}

body {
	background-color: var(--site-backgroundColor);
	color: var(--site-colorFront);
	font-weight: var(--base-font-weight);
	/* font-size: var(--base-font-size); */
	font-size: calc(16px + (14 - 13) * ((100vw - 300px) / (1600 - 300)));
	line-height: calc(1.5rem + (1.5 - 1.4) * ((100vw - 300px) / (1600 - 300)));
	font-style: normal;
	/* line-height: 1.25; */
	letter-spacing: .003em;
	/* Cleaner font rendering */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* line-height: 1.5; */
	position: relative;
	overflow-x: hidden;
}

/**
 * Links
 */
a {
	color: var(--site-color-link, var(--blue));
	text-decoration: underline;
	text-decoration-skip: auto;
	background-color: transparent;
	/* // Remove the gray background on active links in IE 10. */
	-webkit-text-decoration-skip: objects;
	/* // Remove gaps in links underline in iOS 8+ and Safari 8+. */
	transition: all .4s ease-out;
	outline:none;
	&:hover,
	&:focus {
		text-decoration: none;
		color: var(--site-color-link-hover);
		transition: all .4s ease-out;
		outline:none;
	}
}

button {
	box-sizing: border-box;
	background-color: transparent;
	background-image: none;
	padding: 0;
	border: none;
	box-sizing: border-box;
	user-select: none;
	outline: none;
	font-style: inherit;
	font-variant: inherit;
	vertical-align: middle;
	text-align: center;
	text-decoration: none;
	overflow: hidden;
	white-space: nowrap;
	letter-spacing: .03rem;
	cursor: pointer;

	&:hover,
	&:focus,
	&:active,
	&:focus:active {
		outline: none;
	}

	&:hover {
		cursor: pointer;
	}

	&[disabled],
	[disabled] & {
		cursor: not-allowed;
	}
}

article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
	display: block;
}

audio,
canvas,
iframe,
img,
svg,
video {
	vertical-align: middle;
}

img,
iframe,
video {
	max-width: 100%;
	border-style: none;
	/*Remove the border on images inside links in IE 10-.*/
}

ol,
ul {
	list-style: none;
	margin: 0;
	padding: 0
}

`;




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