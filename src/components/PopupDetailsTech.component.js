import { StyledSpanBold, StyledP, StyledUl, StyledLi, StyledSpan } from '@/styles/common.styles';
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
						<StyledSpanBold>Unity </StyledSpanBold> and it&apos;s made available to Game Designers, QA,
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
							Co-designed the app&apos;s <StyledSpanBold>UI and UX</StyledSpanBold>, with an emphasis on
							ease of use and clarity.
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
							Co-designed the app&apos;s <StyledSpanBold>UI and UX</StyledSpanBold>, with an emphasis on
							ease of use and clarity.
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
			{popupTechId === 'marakana-combine-app' && (
				<>
					<StyledPopupTitle>Marakana Combine App</StyledPopupTitle>
					<StyledP>
						<StyledPopupSubtitle>What and When: </StyledPopupSubtitle>
						As CTO of <StyledSpanBold>Marakana Sports </StyledSpanBold>(now called Get Rival) I led the
						development of this iOS app in 2019. It allowed users to record themselves doing physical
						challenges related to soccer, get evaluated by AI, and compete with friends.
					</StyledP>
					<StyledP>
						<StyledPopupSubtitle>How: </StyledPopupSubtitle>
						The app was developed using <StyledSpanBold>Swift</StyledSpanBold> and
						<StyledSpanBold> Firebase</StyledSpanBold>. It used
						<StyledSpanBold> Machine Learning</StyledSpanBold> to analyze the user&apos;s performance and
						give them feedback.
					</StyledP>
					<StyledPopupSubtitle>Cool things I did:</StyledPopupSubtitle>
					<StyledUl>
						<StyledLi>
							Build the whole <StyledSpanBold>backend and frontend </StyledSpanBold> from the ground up,
							from brainstorming to production.
						</StyledLi>
						<StyledLi>
							Implemented in-app <StyledSpanBold>Neural Networks </StyledSpanBold>for Computer Vision,
							which allowed the app to evaluate the user&apos;s performance in real-time.
						</StyledLi>
						<StyledLi>
							Used <StyledSpanBold>transfer learning </StyledSpanBold> to fine-tune a pre-trained model to
							be able to identify a variety of soccer balls.
						</StyledLi>
					</StyledUl>
				</>
			)}
			{popupTechId === 'custom-made-touchscreen-table' && (
				<>
					<StyledPopupTitle>Custom-Made Touchscreen Table</StyledPopupTitle>
					<StyledP>
						<StyledPopupSubtitle>What and When: </StyledPopupSubtitle>I co-designed and co-developed a
						custom-made touchscreen table with the startup <StyledSpanBold>Catalyst</StyledSpanBold> in
						2018. It was round and 5 meters in diameter and was used to showcase Mexican technology during
						the 2018 Hannover Messe 4.0 Festival.
					</StyledP>
					<StyledP>
						<StyledPopupSubtitle>How: </StyledPopupSubtitle>
						The physical table was made using <StyledSpanBold>wood</StyledSpanBold>. The touchscreen was
						made using a combination of{' '}
						<StyledSpanBold>projectors, mirrors, and semi-transparent surfaces</StyledSpanBold>. The
						software was developed using <StyledSpanBold>Unity</StyledSpanBold> and{' '}
						<StyledSpanBold>OpenCV</StyledSpanBold>.
					</StyledP>
					<StyledPopupSubtitle>Cool things I did:</StyledPopupSubtitle>
					<StyledUl>
						<StyledLi>
							Built custom-made <StyledSpanBold>hardware</StyledSpanBold> technology and fine-tune it to
							be comfortable to use.
						</StyledLi>
						<StyledLi>
							Built the entire <StyledSpanBold>Unity app </StyledSpanBold>from scratch, implementing{' '}
							<StyledSpanBold>OpenCV</StyledSpanBold> and <StyledSpanBold>Rfid reading</StyledSpanBold>.
						</StyledLi>
						<StyledLi>
							The table was the main act of the Mexican Pavilion, and it was used for the first time by
							the former Mexican President, <StyledSpanBold>Enrique Peña Nieto</StyledSpanBold> and the
							former German Chancellor, <StyledSpanBold>Angela Merkel</StyledSpanBold>.
						</StyledLi>
					</StyledUl>
				</>
			)}
			{popupTechId === 'simple-predict' && (
				<>
					<StyledPopupTitle>Simple Predict</StyledPopupTitle>
					<StyledP>
						<StyledPopupSubtitle>What and When: </StyledPopupSubtitle>As CTO of SimplifAI, in 2017 I co-led
						the development of Simple Predict, a web app that allowed non-technical users to create and
						train machine learning models using nothing more than a spreadsheet.
					</StyledP>
					<StyledP>
						<StyledPopupSubtitle>How: </StyledPopupSubtitle>
						The app used randomized grid search to find the best Neural Network architecture for a given
						dataset. It then trained the model and made it available to the user for predictions.
					</StyledP>
					<StyledPopupSubtitle>Cool things I did:</StyledPopupSubtitle>
					<StyledUl>
						<StyledLi>
							Built the <StyledSpanBold>frontend </StyledSpanBold>from scratch, using HTML, CSS, and
							jQuery.
						</StyledLi>
						<StyledLi>
							Integrated <StyledSpanBold>D3.js </StyledSpanBold>to visualize the different models while
							training them. This was meant as an aesthic feature, but it also helped the user understand
							the training process.
						</StyledLi>
					</StyledUl>
				</>
			)}
		</StyledPopupContent>
	);
}
