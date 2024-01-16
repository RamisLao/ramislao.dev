import { useState } from 'react';
import styled from 'styled-components';

import { StyledRowAlignCenter, StyledButtonNoStyle } from '@/styles/common.styles';

const StyledArrowButtons = styled(StyledButtonNoStyle)`
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.1);
	}
`;

const StyledCarouselContainer = styled.div`
	display: flex;
	width: ${(props) => props.childWidth};
	overflow: hidden;
`;

const StyledItemContainer = styled.div`
	display: flex;
	transition: transform 0.3s ease-in-out;
	width: ${(props) => props.totalWidth};
`;

const StyledItem = styled.div`
	flex-basis: 100%;
	flex-shrink: 0;
`;

export default function Carousel({ children, childWidth }) {
	const [activeIndex, setActiveIndex] = useState(0);

	const previousIndex = activeIndex - 1 < 0 ? children.length - 1 : activeIndex - 1;
	const nextIndex = activeIndex + 1 == children.length ? 0 : activeIndex + 1;

	const handleNext = () => {
		setActiveIndex(nextIndex);
	};

	const handlePrev = () => {
		setActiveIndex(previousIndex);
	};

	return (
		<StyledRowAlignCenter
			style={{
				gap: '50px',
				borderRadius: '20px',
			}}>
			<StyledArrowButtons onClick={handlePrev}>
				<img
					src='/images/arrow_left.png'
					alt='Arrow Left'
				/>
			</StyledArrowButtons>
			<StyledCarouselContainer childWidth={childWidth}>
				<StyledItemContainer
					totalWidth={`${children.length * 100}%`}
					style={{
						transform: `translateX(-${activeIndex * 100}%)`,
					}}>
					{children.map((child, index) => {
						return <StyledItem key={index}>{child}</StyledItem>;
					})}
				</StyledItemContainer>
			</StyledCarouselContainer>
			<StyledArrowButtons onClick={handleNext}>
				<img
					src='/images/arrow_right.png'
					alt='Arrow Right'
				/>
			</StyledArrowButtons>
		</StyledRowAlignCenter>
	);
}
