import styled from 'styled-components';

import { StyledButtonNoStyle, StyledCol } from '@/styles/common.styles';
import colors from '@/styles/colors.styles';

export const StyledCarousel = styled(StyledCol)`
	align-items: center;
	justify-content: center;
`;

export const StyledTitle = styled.span`
	font-family: 'Baloo';
	color: ${(props) => props.color || colors.black};
	font-weight: bold;
	line-height: 1;

	@media ${(props) => props.theme.devices.mobile} {
		font-size: 56px;
	}

	@media ${(props) => props.theme.devices.notMobile} {
		font-size: 128px;
	}
`;

export const StyledSubTitle = styled.span`
	font-family: 'Baloo';
	color: ${(props) => props.color || colors.black};
	font-weight: bold;
	line-height: 1;

	@media ${(props) => props.theme.devices.mobile} {
		font-size: 24px;
	}

	@media ${(props) => props.theme.devices.notMobile} {
		font-size: 40px;
	}
`;

export const StyledArrowButtons = styled(StyledButtonNoStyle)`
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.1);
	}

	@media ${(props) => props.theme.devices.mobile} {
		display: ${(props) => (props.$isMobile ? '' : 'none')};
	}

	@media ${(props) => props.theme.devices.notMobile} {
		display: ${(props) => (props.$isMobile ? 'none' : '')};
	}
`;

export const StyledCarouselContainer = styled.div`
	display: flex;
	overflow: hidden;

	@media ${(props) => props.theme.devices.mobile} {
		width: 280px;
	}

	@media ${(props) => props.theme.devices.notMobile} {
		width: 1200px;
	}
`;

export const StyledItemContainer = styled.div`
	display: flex;
	transition: transform 0.3s ease-in-out;
	width: ${(props) => props.$totalWidth || '1200px'};
`;

export const StyledItem = styled.div`
	flex-basis: 100%;
	flex-shrink: 0;
`;
