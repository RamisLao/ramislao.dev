'use client';

import styled, { useTheme } from 'styled-components';
import { useState, useContext } from 'react';

// Components
import Carousel from '@/components/Carousel.component';
import TV from '@/components/TV.component';
import PopupGames from '@/components/PopupGames.component';
import FlipCard from '@/components/FlipCard.component';

// Styles
import colors from '@/styles/colors.styles';
import { StyledCol, StyledSpan, StyledP, StyledRowAlignCenter } from '@/styles/common.styles';
import { StyledItem } from '@/styles/carousel.styles';

// State
import { GlobalContext } from '@/contexts/global.context';

export default function GamesCarousel() {
	const { currentGlobalState, setCurrentGlobalState } = useContext(GlobalContext);
	const [isPopupGamesOpen, setIsPopupGamesOpen] = useState(false);

	return (
		<>
			{isPopupGamesOpen && (
				<PopupGames
					onClose={() => {
						setIsPopupGamesOpen(false);
					}}>
					<StyledCol
						style={{
							alignItems: 'center',
							padding: '50px',
						}}>
						<StyledSpan
							style={{
								fontFamily: 'Baloo',
								fontWeight: 'bold',
								fontSize: '32px',
								lineHeight: '1',
								color: colors.black,
							}}>
							Luna
						</StyledSpan>
						<StyledP>
							<StyledSpan
								style={{
									fontWeight: 'bold',
									color: colors.black,
								}}>
								High Concept:{' '}
							</StyledSpan>
							'LUNA is a 3D, isometric, hack and slash game about a young Patagonian monk named Luna, who
							must prove herself and pass the sacred Trial of the Gates in order to become a master. Aid
							Luna in the path to test her connections to the 4 Teuschen Chakras!'
						</StyledP>
						<StyledP>
							<StyledSpan
								style={{
									fontWeight: 'bold',
									color: colors.black,
								}}>
								When and where:{' '}
							</StyledSpan>
							Luna was developed in 2022 at Vancouver Film School. It was made by a team of 6 people, and
							we used Unity to develop it. It won the Best Final Project award at the VFS Game Design
							program.
						</StyledP>
						<StyledRowAlignCenter
							style={{
								flexWrap: 'wrap',
							}}>
							<FlipCard
								imageUrl={'/images/screenshots/luna/flowchart_voodoo_doll.png'}
								imageAlt={'Designer'}
								text={
									'I was the game designer, responsible for the game mechanics, level design, and narrative.'
								}
							/>
						</StyledRowAlignCenter>
					</StyledCol>
				</PopupGames>
			)}
			<Carousel
				title='Games'
				titleColor={colors.pink.lightPure}
				childrenLength={5}>
				{({ activeIndex }) => {
					return (
						<>
							<StyledItem>
								<ItemGame
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
										setIsPopupGamesOpen(true);
									}}
									videoID={'zUCQtuZVYwY'}
									isActive={activeIndex == 0}
								/>
							</StyledItem>
							<StyledItem>
								<ItemGame
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
										setIsPopupGamesOpen(true);
									}}
									videoID={'YX2algRcixM'}
									isActive={activeIndex == 1}
								/>
							</StyledItem>
							<StyledItem>
								<ItemGame
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
										setIsPopupGamesOpen(true);
									}}
									videoID={'BnvL6Wmxgyo'}
									isActive={activeIndex == 2}
								/>
							</StyledItem>
							<StyledItem>
								<ItemGame
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
										setIsPopupGamesOpen(true);
									}}
									videoID={'VY78dX4p_Yk'}
									isActive={activeIndex == 3}
								/>
							</StyledItem>
							<StyledItem>
								<ItemGame
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
										setIsPopupGamesOpen(true);
									}}
									videoID={'whVxHwvY5Qw'}
									isActive={activeIndex == 4}
								/>
							</StyledItem>
						</>
					);
				}}
			</Carousel>
		</>
	);
}

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

const StyledItemTitle = styled.div`
	font-family: 'Baloo';
	font-weight: 400;
	line-height: 1;
	color: ${colors.black};
	max-width: 300px;

	@media ${(props) => props.theme.devices.mobile} {
		font-size: 25px;
	}

	@media ${(props) => props.theme.devices.notMobile} {
		font-size: 30px;
	}
`;

const StyledItemDescription = styled.div`
	color: ${colors.black};
	max-width: 300px;
	text-align: center;

	@media ${(props) => props.theme.devices.mobile} {
		font-size: 16px;
	}

	@media ${(props) => props.theme.devices.notMobile} {
		font-size: 20px;
	}
`;

const StyledItemCallToAction = styled.span`
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

	@media ${(props) => props.theme.devices.mobile} {
		font-size: 20px;
	}

	@media ${(props) => props.theme.devices.notMobile} {
		font-size: 25px;
	}
`;

const ItemGame = ({ videoUrl, videoID, title, description, playUrl, onDetailClick, isActive }) => {
	const urlAutoplayMute = videoUrl + `&${isActive ? 'autoplay=1&mute=1&loop=1&' : ''}playlist=${videoID}`;

	return (
		<StyledItemContainer>
			<TV url={urlAutoplayMute} />
			<StyledCol
				style={{
					height: '100%',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<StyledItemTitle
					style={{
						marginBottom: '30px',
					}}>
					{title}
				</StyledItemTitle>
				<StyledItemDescription>{description}</StyledItemDescription>
				<StyledItemCallToAction
					style={{
						marginTop: '24px',
					}}
					onClick={() => {
						onDetailClick();
					}}>
					Read about my role
				</StyledItemCallToAction>
				<StyledItemCallToAction
					style={{
						marginTop: '10px',
					}}
					onClick={() => {
						open(playUrl, '_blank');
					}}>
					Play the game!
				</StyledItemCallToAction>
			</StyledCol>
		</StyledItemContainer>
	);
};
