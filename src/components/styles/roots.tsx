/**
* File Name: roots
*/

/** @jsx jsx */
import { css } from '@emotion/core';

export const roots = css`

:root {
	/*=======================================================================================*/
	/*========================== FONTS ======================================================*/
	/*=======================================================================================*/
		--defaultFont: system-ui;
	/* Lato fonts:
		font light
			font-weight: 300;
		font regular
			font-weight: 400;
		font bold
			font-weight: 700;
		font bold
			font-weight: 900;
	*/
		--latoFontFamily: "Lato", sans-serif;
	/* roboto fonts:
		font light
			font-weight: 300;
		font regular
			font-weight: 400;
		font bold
			font-weight: 700;
	*/
		--robotoFontFamily: 'Roboto', sans-serif;
	
	/* Source sans pro fonts:
		font light
			font-weight: 300;
		font regular
			font-weight: 400;
		font  semibold
			font-weight: 600;
		font bold
			font-weight: 700;
	*/
		--sourceSansProFontFamily: "Source Sans Pro", sans-serif;
	
	/* Raleway font variations:
		font extra light
			font-weight: 100;
		font light
			font-weight: 300;
		font regular
			font-weight: 400;
		font  medium
			font-weight: 500;
		font bold
			font-weight: 700;
		font black
			font-weight: 900;
	*/
		--ralewayFontFamily: 'Raleway', sans-serif;
	
		--site-colorFront: var(--site-colorFront, #171717);
		--site-backgroundColor: var(--site-backgroundColor, #fff);
	
	
	/*=======================================================================================*/
	/*========================== Typography =================================================*/
	/*=======================================================================================*/
		--base-font-family: var(--latoFontFamily), 'Helvetica', 'Arial';
		--base-font-size: 16px;
		--base-font-weight: 400;
	
		--heading-font-family: var(--base-font-family);
	
	
	
	/*=======================================================================================*/
	/*========================== Layout =====================================================*/
	/*=======================================================================================*/
		/* note:
			this value is referential and goes with mediaquerie for ecommerce,
			if changed, then update all paths if possible
		 */
		--site-width: 1560px;
	
	}
	
`;