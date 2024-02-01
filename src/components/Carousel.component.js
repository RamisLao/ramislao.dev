'use client';

import { useState } from 'react';
import styled from 'styled-components';

import { StyledRowAlignCenter, StyledButtonNoStyle, StyledCol, StyledSpan } from '@/styles/common.styles';
import colors from '@/styles/colors.styles';
import {
	StyledCarousel,
	StyledTitle,
	StyledSubTitle,
	StyledArrowButtons,
	StyledCarouselContainer,
	StyledItemContainer,
	StyledItem,
} from '@/styles/carousel.styles';

export default function Carousel({ title, titleColor, children, childrenLength }) {
	const [activeIndex, setActiveIndex] = useState(0);

	const handlePrev = () => {
		setActiveIndex(activeIndex - 1 < 0 ? childrenLength - 1 : activeIndex - 1);
	};

	const handleNext = () => {
		setActiveIndex(activeIndex + 1 == childrenLength ? 0 : activeIndex + 1);
	};

	return (
		<StyledCarousel
			style={{
				borderRadius: '20px',
			}}>
			{title && (
				<StyledRowAlignCenter
					style={{
						gap: '20px',
					}}>
					<StyledArrowButtons
						onClick={handlePrev}
						$isMobile={true}>
						<img
							src='/images/arrow_left.png'
							alt='Arrow Left'
							height={40}
						/>
					</StyledArrowButtons>
					<StyledCol
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							marginBottom: '20px',
						}}>
						<StyledTitle color={titleColor}>{title}</StyledTitle>
						<StyledSubTitle>{`${activeIndex + 1}/${childrenLength}`}</StyledSubTitle>
					</StyledCol>
					<StyledArrowButtons
						onClick={handleNext}
						$isMobile={true}>
						<img
							src='/images/arrow_right.png'
							alt='Arrow Left'
							height={40}
						/>
					</StyledArrowButtons>
				</StyledRowAlignCenter>
			)}
			<StyledRowAlignCenter>
				<StyledArrowButtons
					onClick={handlePrev}
					$isMobile={false}>
					<img
						src='/images/arrow_left.png'
						alt='Arrow Left'
					/>
				</StyledArrowButtons>
				<StyledCarouselContainer>
					<StyledItemContainer
						$totalWidth={`${childrenLength * 100}%`}
						style={{
							transform: `translateX(-${activeIndex * 100}%)`,
						}}>
						{children({
							activeIndex,
						})}
					</StyledItemContainer>
				</StyledCarouselContainer>
				<StyledArrowButtons
					onClick={handleNext}
					$isMobile={false}>
					<img
						src='/images/arrow_right.png'
						alt='Arrow Right'
					/>
				</StyledArrowButtons>
			</StyledRowAlignCenter>
		</StyledCarousel>
	);
}
