import { useState } from 'react';
import styled from 'styled-components';

import { StyledRowAlignCenter, StyledButtonNoStyle } from '@/styles/common.styles';

const StyledArrowButtons = styled(StyledButtonNoStyle)`
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.1);
	}
`;

export default function Carousel({ children }) {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleNext = () => {
		setActiveIndex(activeIndex + 1 == children.length ? 0 : activeIndex + 1);
	};

	const handlePrev = () => {
		setActiveIndex(activeIndex - 1 < 0 ? children.length - 1 : activeIndex - 1);
	};

	return (
		<StyledRowAlignCenter
			style={{
				gap: '30px',
			}}>
			<StyledArrowButtons onClick={handlePrev}>
				<img
					src='/images/arrow_left.png'
					alt='Arrow Left'
				/>
			</StyledArrowButtons>
			{children[activeIndex]}
			<StyledArrowButtons onClick={handleNext}>
				<img
					src='/images/arrow_right.png'
					alt='Arrow Right'
				/>
			</StyledArrowButtons>
		</StyledRowAlignCenter>
	);
}
