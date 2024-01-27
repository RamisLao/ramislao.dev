'use client';

import styled from 'styled-components';

import PopupGenericFullScreen from './PopupGenericFullScreen.component';
import { StyledRowAlignCenter } from '@/styles/common.styles';

const StyledContainer = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledTransparentGif = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%; // Match the container's size
	height: 100%; // Match the container's size
	pointer-events: none; // Make sure the gif doesn't block clicks
`;

const StyledCloseButton = styled.button`
	position: absolute;
	top: 30px;
	right: 30px;
	z-index: 1;
`;

export default function PopupGames({ onClose }) {
	return (
		<PopupGenericFullScreen onClickOutside={onClose}>
			{({ handleClose }) => {
				return (
					<StyledContainer>
						<StyledCloseButton onClick={handleClose}>Close</StyledCloseButton>
						<StyledTransparentGif src='/gifs/tv.gif' />
						<StyledRowAlignCenter
							style={{
								margin: '0 300px',
							}}>
							<img
								src='/images/screenshots/tictactoe.png'
								alt='Screenshot'
								style={{
									width: '100%',
									height: 'auto',
									maxWidth: '100%',
									marginRight: '50px',
								}}
							/>
							<div
								style={{
									width: '100%',
									minWidth: '300px',
								}}>
								<h1>Tic Tac Toe</h1>
								<p
									style={{
										fontSize: '1.2rem',
									}}>
									Play the classic game of Tic Tac Toe against the computer. The computer uses the
									minimax algorithm to determine the best move.
								</p>
							</div>
						</StyledRowAlignCenter>
					</StyledContainer>
				);
			}}
		</PopupGenericFullScreen>
	);
}
