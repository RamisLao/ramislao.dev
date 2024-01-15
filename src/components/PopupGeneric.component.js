// Third-party
import React, { useRef } from 'react';
import styled from 'styled-components';

// Hooks
import useOutsideClickHandler from '@/hooks/useOutsideClickHandler.hook';

const StyledPopupGeneric = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	z-index: ${(props) => props.zIndex || 20};
`;

export default function PopupGeneric({ children, onClickOutside, zIndex = 10, style = {} }) {
	const wrapperRef = useRef(null);
	useOutsideClickHandler({ ref: wrapperRef, onClickOutside });

	return (
		<StyledPopupGeneric
			ref={wrapperRef}
			style={style}
			zIndex={zIndex}>
			{children}
		</StyledPopupGeneric>
	);
}
