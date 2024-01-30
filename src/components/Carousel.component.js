'use client';

import { useState } from 'react';
import styled from 'styled-components';

import { StyledRowAlignCenter, StyledButtonNoStyle, StyledCol, StyledSpan } from '@/styles/common.styles';
import colors from '@/styles/colors.styles';

const StyledCarousel = styled(StyledCol)`
	align-items: center;
	justify-content: center;
`;

const StyledTitle = styled.span`
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

const StyledSubTitle = styled.span`
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

const StyledArrowButtons = styled(StyledButtonNoStyle)`
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

export default function Carousel({ title, titleColor, children }) {
	const [activeIndex, setActiveIndex] = useState(0);

	const handlePrev = () => {
		setActiveIndex(activeIndex - 1 < 0 ? children.length - 1 : activeIndex - 1);
	};

	const handleNext = () => {
		setActiveIndex(activeIndex + 1 == children.length ? 0 : activeIndex + 1);
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
						<StyledSubTitle>{`${activeIndex + 1}/${children.length}`}</StyledSubTitle>
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
						$totalWidth={`${children.length * 100}%`}
						style={{
							transform: `translateX(-${activeIndex * 100}%)`,
						}}>
						{children.map((child, index) => {
							return <StyledItem key={index}>{child}</StyledItem>;
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
