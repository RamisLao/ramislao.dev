'use client';

import styled from 'styled-components';

import PopupGenericFullScreen from './PopupGenericFullScreen.component';
import { StyledButtonNoStyle } from '@/styles/common.styles';
import theme from '@/libs/styledComponentsTheme.lib';

const StyledContainer = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	display: flex;
`;

const StyledBackground = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw; // Match the container's size
	height: 100vh; // Match the container's size
	pointer-events: none; // Make sure the gif doesn't block clicks
`;

const StyledCloseButton = styled(StyledButtonNoStyle)`
	position: absolute;
	top: 10px;
	right: 10px;
	z-index: 2;
`;

export default function PopupGames({ onClose, children }) {
	return (
		<PopupGenericFullScreen onClickOutside={onClose}>
			{({ handleClose }) => {
				return (
					<StyledContainer>
						<StyledCloseButton onClick={handleClose}>
							<img
								src='/images/icon_close.png'
								alt='Close'
								style={{
									width: '25px',
									height: 'auto',
								}}
							/>
						</StyledCloseButton>
						<picture>
							<source
								media={theme.devices.mobile}
								srcSet='/images/mobile_android/popup_fullscreen.png'
							/>
							<source
								media={theme.devices.notMobile}
								srcSet='/images/mobile_android/popup_fullscreen.png'
							/>
							<StyledBackground
								src='/images/mobile_android/popup_fullscreen.png'
								alt='Popup Background'
							/>
						</picture>
						<div
							style={{
								zIndex: 1,
							}}>
							{children}
						</div>
					</StyledContainer>
				);
			}}
		</PopupGenericFullScreen>
	);
}
