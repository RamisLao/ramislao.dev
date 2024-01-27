'use client';

// Third-party
import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Hooks
import useOutsideClickHandler from '@/hooks/useOutsideClickHandler.hook';

// Keyframes for slide-in and slide-out animations
const slideInFromLeft = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const slideOutToLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`;

const StyledPopupGenericFullScreen = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: white;
	z-index: ${(props) => props.$zIndex || 20};
	animation: ${(props) => (props.$isClosing ? slideOutToLeft : slideInFromLeft)} 0.3s ease-out forwards;
`;

export default function PopupGenericFullScreen({ children, onClickOutside, zIndex = 10, style = {} }) {
	const [isClosing, setIsClosing] = useState(false);
	const wrapperRef = useRef(null);
	useOutsideClickHandler({ ref: wrapperRef, onClickOutside });

	const handleClose = () => {
		setIsClosing(true);
		// Set a timeout equal to the animation duration before executing the close logic
		setTimeout(() => {
			onClickOutside(); // Assuming this function handles the actual closing logic
		}, 500); // 500ms matches the animation duration
	};

	return (
		<StyledPopupGenericFullScreen
			$isClosing={isClosing}
			ref={wrapperRef}
			style={style}
			$zIndex={zIndex}>
			{children({ handleClose })}
		</StyledPopupGenericFullScreen>
	);
}
