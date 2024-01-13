import styled from 'styled-components';

import colors from '@/styles/colors.styles';

const StyledMenuLink = styled.span`
	font-size: 32px;
	font-weight: 900;
	color: ${colors.blueGreen.medium};
	transition: transform 0.1s ease-in-out;

	&:hover {
		color: ${colors.yellow.light};
		transform: scale(1.1);
		cursor: pointer;
	}
`;

export default function MenuLink({ children, onClick }) {
	return <StyledMenuLink onClick={onClick}>{children}</StyledMenuLink>;
}
