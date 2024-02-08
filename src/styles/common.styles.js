'use client';

import styled from 'styled-components';
import colors from './colors.styles';

export const StyledCol = styled.div.attrs((props) => ({
	className: props.className || '',
}))`
	display: flex;
	flex-direction: column;
`;

export const StyledRow = styled.div.attrs((props) => ({
	className: props.className || '',
}))`
	display: flex;
	flex-direction: row;
`;

export const StyledRowAlignCenter = styled(StyledRow)`
	align-items: center;
`;

export const StyledButtonNoStyle = styled.button`
	background: none;
	border: none;
	padding: 0;
	margin: 0;
	font: inherit;
	color: inherit;
	cursor: pointer;
	outline: none;
`;

export const StyledSpan = styled.span``;

export const StyledSpanBold = styled(StyledSpan)`
	font-weight: bold;
`;

export const StyledP = styled.p``;

export const StyledUl = styled.ul`
	list-style-type: none;
	padding: 0;
	margin: 0;
	line-height: 1.5em;
`;

export const StyledLi = styled.li`
	position: relative;
	padding-left: 20px;

	&::before {
		content: '•';
		color: ${colors.pink.lightPure};
		font-size: 1.5em;
		position: absolute;
		left: 0;
		/* Position the bullet in line with the first line of text */
		top: 0; /* Adjust this value as needed to align with the first line */
	}
`;

export const StyledImg = styled.img``;
