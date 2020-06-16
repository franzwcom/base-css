import React from 'react'

import { BaseCss } from 'base-css';


const App = () => {
	return (
		<React.Fragment>
			<BaseCss />
			<h1>globals loaded</h1>
			<ul>
				<li>111</li>
				<li>wwww</li>
			</ul>
		</React.Fragment>
	)
}

export default App
