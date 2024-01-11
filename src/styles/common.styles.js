import styled from 'styled-components';

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
