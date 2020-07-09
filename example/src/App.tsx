import React from 'react'

import { BaseCss } from 'base-css';


const App = () => {
	return (
		<React.Fragment>
			<BaseCss />
			<h1>Globals loaded</h1>
			<ul>
				<li>Item 1</li>
				<li>Item 2</li>
			</ul>
		</React.Fragment>
	)
}

export default App
