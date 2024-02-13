import styled from 'styled-components';

import { StyledCol, StyledSpan, StyledSpanBold } from './common.styles';
import colors from './colors.styles';

export const StyledPopupContent = styled(StyledCol)`
	align-items: flex-start;
	justify-content: flex-start;
	padding: 50px;
	gap: 20px;
	height: 100%;
	color: ${colors.black};

	@media (max-height: 740px) {
		font-size: 14px;
	}

	@media (min-height: 741px) {
		font-size: 17px;
	}
`;

export const StyledPopupTitle = styled(StyledSpan)`
	font-family: 'Baloo';
	font-weight: bold;
	font-size: 32px;
	line-height: 1;
	color: ${colors.pink.lightPure};
	align-self: center;
	width: 100%;
	text-align: center;

	@media (max-height: 740px) {
		font-size: 32px;
	}

	@media (min-height: 741px) {
		font-size: 36px;
	}
`;

export const StyledPopupSubtitle = styled(StyledSpanBold)`
	color: ${colors.pink.lightPure};
`;
