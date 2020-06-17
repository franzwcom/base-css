/**
* File Name: BaseCss
*/

import React from 'react';
/** @jsx jsx */
import { Global } from '@emotion/core';
import { extraNormalize, normalizecss } from './styles';


export const BaseCss = () => <Global styles={[	// order matters 
	normalizecss,
	extraNormalize
]} />;


