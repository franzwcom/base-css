/**
* File Name: BaseCss
*/

import React from 'react';
/** @jsx jsx */
import { Global } from '@emotion/core';
import { roots, globalcss, extraNormalize } from './styles';
import { latoFont } from './fonts';

export interface IBaseCss {
	children?: React.ReactNode;
};

export const BaseCss = (params: IBaseCss) => {

	const { children } = params;

	return (
		<React.Fragment>
			<Global styles={[
				// order matters 
				extraNormalize,
				latoFont,
				roots,
				globalcss
			]} />
			{children}
		</React.Fragment>
	);
	// End of hook BaseCss
}



