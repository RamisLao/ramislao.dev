'use client';

import styled, { useTheme } from 'styled-components';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import Carousel from '@/components/Carousel.component';
import TV from '@/components/TV.component';
import { StyledCol } from '@/styles/common.styles';
import colors from '@/styles/colors.styles';
import PopupGames from '@/components/PopupGames.component';

// TODO Only play video when it's visible on screen

export default function GamesCarousel() {
	const [isPopupGamesOpen, setIsPopupGamesOpen] = useState(false);
	const theme = useTheme();

	return (
		<>
			{isPopupGamesOpen && (
				<PopupGames
					onClose={() => {
						setIsPopupGamesOpen(false);
					}}
				/>
			)}
			<Carousel>
				<ItemGame
					videoUrl={'https://www.youtube.com/embed/zUCQtuZVYwY?si=ik3XE5LKpkZFLXIv'}
					title={'Luna (2022)'}
					description={
						'LUNA is a 3D, isometric, hack and slash game about a young Patagonian monk named Luna, who must prove herself and pass the sacred Trial of the Gates in order to become a master. Aid Luna in the path to test her connections to the 4 Teuschen Chakras!'
					}
					playUrl={'https://vfs-gdpg.itch.io/luna'}
					onDetailClick={() => {
						setIsPopupGamesOpen(true);
					}}
					videoID={'zUCQtuZVYwY'}
				/>
				<ItemGame
					videoUrl={'https://www.youtube.com/embed/YX2algRcixM?si=pVER7DGEQm1scnBU'}
					title={'Buriti (2022)'}
					description={
						"Buriti is a 2D, deck-building game where you play as Master Buriti. Build the strongest deck to stop Mauarí's curse and reclaim the hallowed grove!"
					}
					playUrl={'https://ssaannttiibb.itch.io/buriti'}
					onDetailClick={() => {
						setIsPopupGamesOpen(true);
					}}
					videoID={'YX2algRcixM'}
				/>
				<ItemGame
					videoUrl={'https://www.youtube.com/embed/BnvL6Wmxgyo?si=3Y8URVpSdAuNWQPw'}
					title={'Gummy Clash (2021)'}
					description={
						'Gummy Clash is a multiplayer 3D platform arena game, where ragdoll gummy characters compete against each other in a real-time shapeshifting stage to try and collect the biggest amount of berries!'
					}
					playUrl={'https://ramislao.itch.io/gummy-clash'}
					onDetailClick={() => {
						setIsPopupGamesOpen(true);
					}}
					videoID={'BnvL6Wmxgyo'}
				/>
				<ItemGame
					videoUrl={'https://www.youtube.com/embed/VY78dX4p_Yk?si=GwJv45GHE4PKWu_S'}
					title={'Unbeatable TicTacToe (2021)'}
					description={
						'Relive your childhood moments in this augmented version of the classical game TicTacToe, featuring an AI built with the Minimax algorithm.'
					}
					playUrl={'https://ramislao.itch.io/unbeatable-tictactoe'}
					onDetailClick={() => {
						setIsPopupGamesOpen(true);
					}}
					videoID={'VY78dX4p_Yk'}
				/>
				<ItemGame
					videoUrl={'https://www.youtube.com/embed/whVxHwvY5Qw?si=KqjFkuDMXigFkhHG'}
					title={'Shapeshifting Arkanoid (2021)'}
					description={
						'A devilishly difficult take on the classic game Arkanoid. The destroyable blocks keep shifting shape in unpredictable ways! Try to survive while your ball accelerates through time until barely noticeable.'
					}
					playUrl={'https://ramislao.itch.io/shapeshifting-arkanoid'}
					onDetailClick={() => {
						setIsPopupGamesOpen(true);
					}}
					videoID={'whVxHwvY5Qw'}
				/>
			</Carousel>
		</>
	);
}

const CallToAction = styled.span`
	font-size: 25px;
	font-weight: bold;
	color: ${colors.pink.lightPure};
	transition: all 0.2s ease-in-out;
	width: fit-content;
	max-width: 300px;

	&:hover {
		cursor: pointer;
	}

	&:hover::after {
		content: '';
		display: block;
		width: 100%;
		height: 2px;
		background-color: ${colors.pink.lightPure};
		animation: underlineSlide 0.3s forwards;
	}

	@keyframes underlineSlide {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}
`;

const StyledItemContainer = styled.div`
	gap: 20px;

	@media ${(props) => props.theme.devices.mobile} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 280px;
	}

	@media ${(props) => props.theme.devices.notMobile} {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 1200px;
	}
`;

const ItemGame = ({ videoUrl, videoID, title, description, descriptionSize, playUrl, onDetailClick }) => {
	const urlAutoplayMute = videoUrl + `&autoplay=1&mute=1&loop=1&playlist=${videoID}`;

	return (
		<StyledItemContainer>
			<TV url={urlAutoplayMute} />
			<StyledCol
				style={{
					height: '100%',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<span
					style={{
						fontFamily: 'Baloo',
						fontSize: '30px',
						lineHeight: '1',
						fontWeight: '400',
						marginBottom: '30px',
						color: colors.black,
					}}>
					{title}
				</span>
				<div
					style={{
						fontSize: descriptionSize || '20px',
						color: colors.black,
					}}>
					{description}
				</div>
				<CallToAction
					style={{
						marginTop: '24px',
					}}
					onClick={() => {
						onDetailClick();
					}}>
					Read about my role
				</CallToAction>
				<CallToAction
					style={{
						marginTop: '10px',
					}}
					onClick={() => {
						open(playUrl, '_blank');
					}}>
					Play the game!
				</CallToAction>
			</StyledCol>
		</StyledItemContainer>
	);
};
