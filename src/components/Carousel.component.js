'use client';

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
	overflow: hidden;

	@media ${(props) => props.theme.devices.mobile} {
		width: 280px;
	}

	@media ${(props) => props.theme.devices.notMobile} {
		width: 1200px;
	}
`;

const StyledItemContainer = styled.div`
	display: flex;
	transition: transform 0.3s ease-in-out;
	width: ${(props) => props.$totalWidth || '1200px'};
`;

const StyledItem = styled.div`
	flex-basis: 100%;
	flex-shrink: 0;
`;

export default function Carousel({ children }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [touchStartPosition, setTouchStartPosition] = useState(0);
	const [touchEndPosition, setTouchEndPosition] = useState(0);

	const handleTouchStart = (e) => {
		setTouchStartPosition(e.touches[0].clientX);
	};

	const handleTouchEnd = () => {
		// Determine swipe direction
		const direction = touchStartPosition - touchEndPosition;
		if (direction > 0 && direction > 50) {
			// Swipe left (show next)
			handleNext();
		} else {
			// Swipe right (show previous)
			handlePrev();
		}
	};

	const handleTouchMove = (e) => {
		setTouchEndPosition(e.touches[0].clientX);
	};

	const handlePrev = () => {
		setActiveIndex(activeIndex - 1 < 0 ? children.length - 1 : activeIndex - 1);
	};

	const handleNext = () => {
		setActiveIndex(activeIndex + 1 == children.length ? 0 : activeIndex + 1);
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
			<StyledCarouselContainer
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
				onTouchMove={handleTouchMove}>
				<StyledItemContainer
					$totalWidth={`${children.length * 100}%`}
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
