import React, { useState } from 'react';
import styled from 'styled-components';

// FlipCard Container
const StyledFlipCard = styled.div`
	background-color: transparent;
	width: 200px;
	height: 200px;
	perspective: 1000px;
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
	background-color: #bbb;
	color: black;
	display: flex;
	align-items: center;
	justify-content: center;
`;

// Back Side
const StyledFlipCardBack = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	background-color: dodgerblue;
	color: white;
	transform: rotateY(180deg);
	display: flex;
	align-items: center;
	justify-content: center;
`;

// StyledImage Component
const StyledImage = styled.img`
	max-width: 100%;
	max-height: 100%;
`;

const FlipCard = ({ imageUrl, imageAlt, text }) => {
	const [flipped, setFlipped] = useState(false);

	const handleFlip = () => {
		setFlipped(!flipped);
	};

	return (
		<StyledFlipCard onClick={handleFlip}>
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
