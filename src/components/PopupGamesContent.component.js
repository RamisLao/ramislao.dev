import styled from 'styled-components';

import { StyledCol, StyledSpan, StyledSpanBold, StyledP, StyledUl, StyledLi, StyledImg } from '@/styles/common.styles';
import colors from '@/styles/colors.styles';

const StyledPopupContent = styled(StyledCol)`
	align-items: flex-start;
	justify-content: flex-start;
	padding: 60px 50px 50px 50px;
	gap: 20px;
	height: 100%;
	color: ${colors.black};

	@media (max-height: 740px) {
		font-size: 14px;
	}

	@media (min-height: 741px) {
		font-size: 17px;
	}
`;

const StyledPopupTitle = styled(StyledSpan)`
	font-family: 'Baloo';
	font-weight: bold;
	font-size: 32px;
	line-height: 1;
	color: ${colors.pink.lightPure};
	align-self: center;

	@media (max-height: 740px) {
		font-size: 32px;
	}

	@media (min-height: 741px) {
		font-size: 36px;
	}
`;

const StyledPopupSubtitle = styled(StyledSpanBold)`
	color: ${colors.pink.lightPure};
`;

export default function PopupGamesContent({ popupGamesId }) {
	return (
		<StyledPopupContent>
			{popupGamesId === 'luna' && (
				<>
					<StyledPopupTitle>Luna</StyledPopupTitle>
					<StyledP>
						<StyledPopupSubtitle>High Concept: </StyledPopupSubtitle>
						Luna is a <StyledSpanBold>3D, isometric, hack and slash</StyledSpanBold> game about a young
						Patagonian monk named Luna, who must prove herself and pass the sacred Trial of the Gates in
						order to become a master.
					</StyledP>
					<StyledP>
						<StyledPopupSubtitle>When and where: </StyledPopupSubtitle>
						Luna was developed in <StyledSpanBold>2022 at Vancouver Film School</StyledSpanBold>. It was
						made by a team of 6 people using <StyledSpanBold>Unity</StyledSpanBold>. It won the{' '}
						<StyledSpanBold>Best Final Project </StyledSpanBold>award at the VFS Game Design program.
					</StyledP>
					<StyledPopupSubtitle>Cool things I did:</StyledPopupSubtitle>
					<StyledUl>
						<StyledLi>
							Designed <StyledSpanBold>AI flowcharts</StyledSpanBold> and implemented 5 AI agents using{' '}
							<StyledSpanBold>Behavior State Machines</StyledSpanBold> made from scratch.
						</StyledLi>
						<StyledLi>
							Implemented <StyledSpanBold>flocking </StyledSpanBold> behaviors and a{' '}
							<StyledSpanBold>Ticket System </StyledSpanBold> to coordinate AI agents.
						</StyledLi>
						<StyledLi>
							Created <StyledSpanBold>Inspector tools</StyledSpanBold> for Game Designers. For example, I
							created a <StyledSpanBold>Trial Designer</StyledSpanBold>, where designers could easily add
							and remove beats from a Trial, define setup and cleanup actions, define win and lose
							conditions, and more.
						</StyledLi>
					</StyledUl>
				</>
			)}
			{popupGamesId === 'buriti' && (
				<>
					<StyledPopupTitle>Buriti</StyledPopupTitle>
					<StyledP>
						<StyledPopupSubtitle>High Concept: </StyledPopupSubtitle>
						Buriti is a <StyledSpanBold>2D, deck-building</StyledSpanBold> game where you play as Master
						Buriti. Build the strongest deck to stop Mauarí&apos;s curse and reclaim the hallowed grove!
					</StyledP>
					<StyledP>
						<StyledPopupSubtitle>When and where: </StyledPopupSubtitle>
						Buriti was developed in <StyledSpanBold>2022</StyledSpanBold> for the
						<StyledSpanBold>Game Jam Plus 22/23</StyledSpanBold>. It won
						<StyledSpanBold>2nd place</StyledSpanBold> in the Regional Phase. It was made by a team of 5
						people using <StyledSpanBold>Unity</StyledSpanBold>.
					</StyledP>
					<StyledPopupSubtitle>Cool things I did:</StyledPopupSubtitle>
					<StyledUl>
						<StyledLi>
							Implemented the <StyledSpanBold>deck-building system</StyledSpanBold>: hand, draw and
							discard piles, deck building mechanics, and the deck explorer.
						</StyledLi>
						<StyledLi>
							Implemented <StyledSpanBold>Combat System</StyledSpanBold> using cards: AI to choose the
							best card to play; health system; card effects.
						</StyledLi>
					</StyledUl>
				</>
			)}
			{popupGamesId === 'gummy-clash' && (
				<>
					<StyledPopupTitle>Gummy Clash</StyledPopupTitle>
					<StyledP>
						<StyledPopupSubtitle>High Concept: </StyledPopupSubtitle>
						Gummy Clash is a <StyledSpanBold>local multiplayer 3D platform arena</StyledSpanBold> game,
						where ragdoll gummy characters compete against each other in a real-time shapeshifting stage.
					</StyledP>
					<StyledP>
						<StyledPopupSubtitle>When and where: </StyledPopupSubtitle>
						Gummy Clash was developed in 2021 for the
						<StyledSpanBold>Team Project at Vancouver Film School</StyledSpanBold>. It was made by a team of
						5 people using <StyledSpanBold>Unity</StyledSpanBold>.
					</StyledP>
					<StyledPopupSubtitle>Cool things I did:</StyledPopupSubtitle>
					<StyledUl>
						<StyledLi>
							Implemented <StyledSpanBold>Ragdoll Physics</StyledSpanBold> for the characters, using a
							combination of <StyledSpanBold>Configurable Joints and Animations</StyledSpanBold>.
						</StyledLi>
						<StyledLi>
							Implemented <StyledSpanBold>local multiplayer </StyledSpanBold>for 2-4 players, with support
							for <StyledSpanBold>keyboard and controllers</StyledSpanBold>.
						</StyledLi>
						<StyledLi>
							Designed and implemented a tool that lets <StyledSpanBold>Game Designers </StyledSpanBold>
							create levels using <StyledSpanBold>Spreadsheets</StyledSpanBold>.
						</StyledLi>
						<StyledLi>
							Designed and implemented <StyledSpanBold>procedural systems</StyledSpanBold> for: difficulty
							progression; level transitions; placement of berries, candies, and decorative props
						</StyledLi>
					</StyledUl>
				</>
			)}
			{popupGamesId === 'unbeatable-tictactoe' && (
				<>
					<StyledPopupTitle>Unbeatable Tic-Tac-Toe</StyledPopupTitle>
					<StyledP>
						<StyledPopupSubtitle>High Concept: </StyledPopupSubtitle>
						Unbeatable Tic-Tac-Toe is a digital version of the classical game where you can play
						<StyledSpanBold>against a friend</StyledSpanBold> or by yourself, facing an
						<StyledSpanBold>AI with 3 levels of difficulty</StyledSpanBold>.
					</StyledP>
					<StyledP>
						<StyledPopupSubtitle>When and why: </StyledPopupSubtitle>
						This game was made in 2021 as an exercise to learn about the
						<StyledSpanBold>Minimax algorithm</StyledSpanBold>
					</StyledP>
					<StyledPopupSubtitle>Cool things I did:</StyledPopupSubtitle>
					<StyledUl>
						<StyledLi>
							Implemented the entire UI using <StyledSpanBold>C# </StyledSpanBold>and the
							<StyledSpanBold>Windows Console</StyledSpanBold>.
						</StyledLi>
						<StyledLi>
							Implemented the <StyledSpanBold>AI</StyledSpanBold> using the
							<StyledSpanBold>Minimax algorithm</StyledSpanBold> with
							<StyledSpanBold>Alpha-Beta pruning</StyledSpanBold>.
						</StyledLi>
						<StyledLi>
							Implemented 3 levels of difficulty: <StyledSpanBold>Easy, Medium, and Hard</StyledSpanBold>,
							by controlling the depth of the search tree in the Minimax algorithm
						</StyledLi>
					</StyledUl>
				</>
			)}
		</StyledPopupContent>
	);
}
