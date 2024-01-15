import styled from 'styled-components';
import { useState } from 'react';

import Carousel from '@/components/Carousel.component';
import TV from '@/components/TV.component';
import { StyledRowAlignCenter, StyledCol } from '@/styles/common.styles';
import colors from '@/styles/colors.styles';
import PopupGames from '@/components/PopupGames.component';

export default function GamesCarousel() {
	const [isPopupGamesOpen, setIsPopupGamesOpen] = useState(false);

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

const ItemGame = ({ videoUrl, title, description, descriptionSize, playUrl, onDetailClick }) => {
	const urlAutoplayMute = videoUrl + '&autoplay=1&mute=1';

	return (
		<StyledRowAlignCenter
			style={{
				gap: '20px',
			}}>
			<TV url={urlAutoplayMute} />
			<StyledCol
				style={{
					height: '100%',
				}}>
				<span
					style={{
						fontFamily: 'Baloo',
						fontSize: '30px',
						lineHeight: '1',
						fontWeight: '400',
						marginBottom: '30px',
						maxWidth: '300px',
					}}>
					{title}
				</span>
				<span
					style={{
						fontSize: descriptionSize || '20px',
						maxWidth: '300px',
					}}>
					{description}
				</span>
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
		</StyledRowAlignCenter>
	);
};
