# base-css

> Basic css reset styles for browser consistency

[![NPM](https://img.shields.io/npm/v/base-css.svg)](https://www.npmjs.com/package/@pomegranate-ui/base-css) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
	yarn add  @pomegranate-ui/base-css
```

## Usage

```tsx
import React from 'react'
import { BaseCss } from '@pomegranate-ui/base-css'
import { jsx, Global, css } from '@emotion/core'
```

> The `:root` can be useful for declaring CSS variables
> extending also for global clases, use it sparingly

```tsx
const roots = css`
	:root {
		--brand-apple-bg: #000;
		--brand-apple-color: #fff;
		--brand-apple-bg-hover: #1b1b1b;
		--brand-twitter-bg: #1da1f2;
		--brand-twitter-color: #fff;
		--brand-twitter-bg-hover: #0096f2;
		--brand-github-bg: #24292e;
		--brand-github-color: #fff;
		--brand-github-bg-hover: #000;
	}
	.custom-class {
		font-family: sans-serif;
	}
`
```

```tsx
const App = () => {
	return (
		<React.Fragment>
			<BaseCss />
			<Global styles={roots} />
			// must be installed in the root of the app
		</React.Fragment>
	)
}
```

## License

© [franzwcom](https://github.com/franzwcom)
