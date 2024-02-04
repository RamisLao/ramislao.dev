import React, { useState } from 'react';
import styled from 'styled-components';

import colors from '@/styles/colors.styles';

// FlipCard Container
const StyledFlipCard = styled.div`
	grid-area: ${(props) => props.$gridArea};
	background-color: transparent;
	width: ${(props) => props.$size};
	height: ${(props) => props.$size};
	perspective: 1000px;
	border-radius: 10px; /* Example radius */
	overflow: hidden; /* Ensure inner parts do not overflow the rounded corners */
`;

// Inner Content
const StyledFlipCardInner = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	text-align: center;
	transition: transform 0.6s;
	transform-style: preserve-3d;
	cursor: pointer;
	transform: ${(props) => (props.$flipped ? 'rotateY(180deg)' : 'rotateY(0)')};
`;

// Front Side
const StyledFlipCardFront = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	background-color: ${colors.white};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
`;

// Back Side
const StyledFlipCardBack = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	background-color: dodgerblue;
	transform: rotateY(180deg);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	font-size: 12px;
`;

// StyledImage Component
const StyledImage = styled.img`
	max-width: 100%;
	max-height: 100%;
`;

const FlipCard = ({ imageUrl, imageAlt, text, size = '200px', gridArea = '' }) => {
	const [flipped, setFlipped] = useState(false);

	const handleFlip = () => {
		setFlipped(!flipped);
	};

	return (
		<StyledFlipCard
			$gridArea={gridArea}
			onClick={handleFlip}
			$size={size}>
			<StyledFlipCardInner $flipped={flipped}>
				<StyledFlipCardFront>
					<StyledImage
						src={imageUrl}
						alt={imageAlt}
					/>
				</StyledFlipCardFront>
				<StyledFlipCardBack>
					<p>{text}</p>
				</StyledFlipCardBack>
			</StyledFlipCardInner>
		</StyledFlipCard>
	);
};

export default FlipCard;
