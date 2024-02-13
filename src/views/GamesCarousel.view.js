'use client';

import { useState, useContext } from 'react';

// Components
import Carousel from '@/components/Carousel.component';
import PopupDetails from '@/views/PopupDetails.view';
import PopupDetailsGames from '@/components/PopupDetailsGames.component';
import CarouselItem from '@/components/CarouselItem.component';

// Styles
import colors from '@/styles/colors.styles';
import { StyledItem } from '@/styles/carousel.styles';

// State
import { GlobalContext } from '@/contexts/global.context';

export default function GamesCarousel() {
	const { currentGlobalState, setCurrentGlobalState } = useContext(GlobalContext);
	const [isPopupDetailsOpen, setIsPopupDetailsOpen] = useState(false);

	return (
		<>
			{isPopupDetailsOpen && (
				<PopupDetails
					onClose={() => {
						setIsPopupDetailsOpen(false);
					}}>
					<PopupDetailsGames popupGamesId={currentGlobalState.popupGamesId} />
				</PopupDetails>
			)}
			<Carousel
				title='Games'
				titleColor={colors.pink.lightPure}
				childrenLength={6}>
				{({ activeIndex }) => {
					return (
						<>
							<StyledItem>
								<CarouselItem
									videoUrl={'https://www.youtube.com/embed/AR5354rR4b0?si=dlyRLeIWfHj1cej7'}
									title={'Party Demon (in progress)'}
									description={
										'Party Demon is a tower defense, deck-building game where your main goal is to protect a Lady Demon’s birthday party from human intruders. Build your castle on a budget and defend it in real-time with a deadly Trap Deck full of demonic weapons.'
									}
									playUrl={'https://store.steampowered.com/app/1659530/Party_Demon/'}
									onDetailClick={() => {
										setCurrentGlobalState({
											popupGamesId: 'party-demon',
										});
										setIsPopupDetailsOpen(true);
									}}
									videoID={'AR5354rR4b0'}
									isActive={activeIndex == 0}
									alternativePlayText={'Wishlist the game on Steam!'}
								/>
							</StyledItem>
							<StyledItem>
								<CarouselItem
									videoUrl={'https://www.youtube.com/embed/zUCQtuZVYwY?si=ik3XE5LKpkZFLXIv'}
									title={'Luna (2022)'}
									description={
										'LUNA is a 3D, isometric, hack and slash game about a young Patagonian monk named Luna, who must prove herself and pass the sacred Trial of the Gates in order to become a master. Aid Luna in the path to test her connections to the 4 Teuschen Chakras!'
									}
									playUrl={'https://vfs-gdpg.itch.io/luna'}
									onDetailClick={() => {
										setCurrentGlobalState({
											popupGamesId: 'luna',
										});
										setIsPopupDetailsOpen(true);
									}}
									videoID={'zUCQtuZVYwY'}
									isActive={activeIndex == 1}
								/>
							</StyledItem>
							<StyledItem>
								<CarouselItem
									videoUrl={'https://www.youtube.com/embed/YX2algRcixM?si=pVER7DGEQm1scnBU'}
									title={'Buriti (2022)'}
									description={
										"Buriti is a 2D, deck-building game where you play as Master Buriti. Build the strongest deck to stop Mauarí's curse and reclaim the hallowed grove!"
									}
									playUrl={'https://ssaannttiibb.itch.io/buriti'}
									onDetailClick={() => {
										setCurrentGlobalState({
											popupGamesId: 'buriti',
										});
										setIsPopupDetailsOpen(true);
									}}
									videoID={'YX2algRcixM'}
									isActive={activeIndex == 2}
								/>
							</StyledItem>
							<StyledItem>
								<CarouselItem
									videoUrl={'https://www.youtube.com/embed/BnvL6Wmxgyo?si=3Y8URVpSdAuNWQPw'}
									title={'Gummy Clash (2021)'}
									description={
										'Gummy Clash is a multiplayer 3D platform arena game, where ragdoll gummy characters compete against each other in a real-time shapeshifting stage to try and collect the biggest amount of berries!'
									}
									playUrl={'https://ramislao.itch.io/gummy-clash'}
									onDetailClick={() => {
										setCurrentGlobalState({
											popupGamesId: 'gummy-clash',
										});
										setIsPopupDetailsOpen(true);
									}}
									videoID={'BnvL6Wmxgyo'}
									isActive={activeIndex == 3}
								/>
							</StyledItem>
							<StyledItem>
								<CarouselItem
									videoUrl={'https://www.youtube.com/embed/VY78dX4p_Yk?si=GwJv45GHE4PKWu_S'}
									title={'Unbeatable TicTacToe (2021)'}
									description={
										'Relive your childhood moments in this augmented version of the classical game TicTacToe, featuring an AI built with the Minimax algorithm.'
									}
									playUrl={'https://ramislao.itch.io/unbeatable-tictactoe'}
									onDetailClick={() => {
										setCurrentGlobalState({
											popupGamesId: 'unbeatable-tictactoe',
										});
										setIsPopupDetailsOpen(true);
									}}
									videoID={'VY78dX4p_Yk'}
									isActive={activeIndex == 4}
								/>
							</StyledItem>
							<StyledItem>
								<CarouselItem
									videoUrl={'https://www.youtube.com/embed/whVxHwvY5Qw?si=KqjFkuDMXigFkhHG'}
									title={'Shapeshifting Arkanoid (2021)'}
									description={
										'A devilishly difficult take on the classic game Arkanoid. The destroyable blocks keep shifting shape in unpredictable ways! Try to survive while your ball accelerates through time until barely noticeable.'
									}
									playUrl={'https://ramislao.itch.io/shapeshifting-arkanoid'}
									onDetailClick={() => {
										setCurrentGlobalState({
											popupGamesId: 'shapeshifting-arkanoid',
										});
										setIsPopupDetailsOpen(true);
									}}
									videoID={'whVxHwvY5Qw'}
									isActive={activeIndex == 5}
								/>
							</StyledItem>
						</>
					);
				}}
			</Carousel>
		</>
	);
}
