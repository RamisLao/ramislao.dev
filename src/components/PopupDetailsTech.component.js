import { StyledSpanBold, StyledP, StyledUl, StyledLi } from '@/styles/common.styles';
import { StyledPopupContent, StyledPopupTitle, StyledPopupSubtitle } from '@/styles/popupDetails.styles';

export default function PopupDetailsTech({ popupTechId }) {
	return (
		<StyledPopupContent>
			{popupTechId === 'hyper-cheats-web-app' && (
				<>
					<StyledPopupTitle>Hyper Cheats Web App</StyledPopupTitle>
					<StyledP>
						<StyledPopupSubtitle>What and When: </StyledPopupSubtitle>
						Hyper Cheats is a web app made in 2023 for internal use at Mexican game development studio
						<StyledSpanBold> HyperBeard</StyledSpanBold>. It allows the team to manage and easily create
						<StyledSpanBold> cheats and rewards </StyledSpanBold> for their games.
					</StyledP>
					<StyledP>
						<StyledPopupSubtitle>How: </StyledPopupSubtitle>
						It was developed using <StyledSpanBold>React, Node, and MySQL</StyledSpanBold>. Data comes from
						<StyledSpanBold>Unity </StyledSpanBold> and it's made available to Game Designers, QA,
						Developers, and Marketing teams.
					</StyledP>
					<StyledPopupSubtitle>Cool things I did:</StyledPopupSubtitle>
					<StyledUl>
						<StyledLi>
							Build the whole <StyledSpanBold>backend and frontend </StyledSpanBold> from the ground up,
							from brainstorming to production.
						</StyledLi>
						<StyledLi>
							Implemented <StyledSpanBold>authentication</StyledSpanBold> and
							<StyledSpanBold>authorization</StyledSpanBold> using JWT.
						</StyledLi>
						<StyledLi>
							Co-designed the app's <StyledSpanBold>UI and UX</StyledSpanBold>, with an emphasis on ease
							of use and clarity.
						</StyledLi>
						<StyledLi>
							Built the entire <StyledSpanBold>API </StyledSpanBold>to manage data from a very complex and
							large database.
						</StyledLi>
						<StyledLi>
							Built a <StyledSpanBold>scalable </StyledSpanBold> app that will be used by many games and
							dozens of developers from the biggest game studio in <StyledSpanBold>Mexico</StyledSpanBold>
							.
						</StyledLi>
					</StyledUl>
				</>
			)}
			{popupTechId === 'ue5-archvis-configurator' && (
				<>
					<StyledPopupTitle>UE5 Archvis Configurator</StyledPopupTitle>
					<StyledP>
						<StyledPopupSubtitle>What and When: </StyledPopupSubtitle>
						The UE5 Archvis Configurator was made in 2023 for the startup
						<StyledSpanBold>Kambio</StyledSpanBold>. It allows the user to
						<StyledSpanBold>customize</StyledSpanBold> their home, see the changes in real-time, and explore
						it.
					</StyledP>
					<StyledP>
						<StyledPopupSubtitle>How: </StyledPopupSubtitle>
						It was developed using <StyledSpanBold>Unreal Engine 5</StyledSpanBold>. It uses
						<StyledSpanBold>Nanite </StyledSpanBold> and <StyledSpanBold>Lumen</StyledSpanBold> to
						streamline the development process, and <StyledSpanBold>Pixel Streaming </StyledSpanBold> to
						allow for high-quality visualization on any device.
					</StyledP>
					<StyledPopupSubtitle>Cool things I did:</StyledPopupSubtitle>
					<StyledUl>
						<StyledLi>
							Build the whole <StyledSpanBold>backend and frontend </StyledSpanBold> from the ground up,
							from brainstorming to production.
						</StyledLi>
						<StyledLi>
							Implemented <StyledSpanBold>authentication</StyledSpanBold> and
							<StyledSpanBold>authorization</StyledSpanBold> using JWT.
						</StyledLi>
						<StyledLi>
							Co-designed the app's <StyledSpanBold>UI and UX</StyledSpanBold>, with an emphasis on ease
							of use and clarity.
						</StyledLi>
						<StyledLi>
							Built the entire <StyledSpanBold>API </StyledSpanBold>to manage data from a very complex and
							large database.
						</StyledLi>
						<StyledLi>
							Built a <StyledSpanBold>scalable </StyledSpanBold> app that will be used by many games and
							dozens of developers from the biggest game studio in <StyledSpanBold>Mexico</StyledSpanBold>
							.
						</StyledLi>
					</StyledUl>
				</>
			)}
		</StyledPopupContent>
	);
}
