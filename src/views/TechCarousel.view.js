// Hyperbeard (Cheats System)
// Kambio
// Custom Engine?
// Marakana
// Catalyst
// SimplifAI

'use client';

import { useState, useContext } from 'react';

// Components
import Carousel from '@/components/Carousel.component';
import PopupDetails from '@/views/PopupDetails.view';
import PopupDetailsTech from '@/components/PopupDetailsTech.component';

// Styles
import colors from '@/styles/colors.styles';
import { StyledItem } from '@/styles/carousel.styles';
import CarouselItem from '@/components/CarouselItem.component';

// State
import { GlobalContext } from '@/contexts/global.context';

export default function TechCarousel() {
	const { currentGlobalState, setCurrentGlobalState } = useContext(GlobalContext);
	const [isPopupDetailsOpen, setIsPopupDetailsOpen] = useState(false);

	return (
		<>
			{isPopupDetailsOpen && (
				<PopupDetails
					onClose={() => {
						setIsPopupDetailsOpen(false);
					}}>
					<PopupDetailsTech popupTechId={currentGlobalState.popupTechId} />
				</PopupDetails>
			)}
			<Carousel
				title='Tech'
				titleColor={colors.blueGreen.medium}
				childrenLength={2}>
				{({ activeIndex }) => {
					return (
						<>
							<StyledItem>
								<CarouselItem
									videoUrl={'https://www.youtube.com/embed/jg1zoCG5wBg?si=QYD4hQ8uRzLKLssE'}
									title={'Hyper Cheats Web App'}
									description={
										'Hyper Cheats is a web app made for internal use at Mexican game development studio HyperBeard. It allows the team to manage and easily create cheats and rewards for their games. It was developed using React and Node.'
									}
									onDetailClick={() => {
										setCurrentGlobalState({
											popupTechId: 'hyper-cheats-web-app',
										});
										setIsPopupDetailsOpen(true);
									}}
									videoID={'jg1zoCG5wBg'}
									isActive={activeIndex == 0}
									callToActionColor={colors.blueGreen.medium}
									playUrl={'https://hyperbeard.com/'}
									alternativePlayText={"Go to HyperBeard's website!"}
								/>
							</StyledItem>
							<StyledItem>
								<CarouselItem
									videoUrl={'https://www.youtube.com/embed/T402YGcUt_Y?si=keY8uyQizOrTnDDI'}
									title={'UE5 Archvis Configurator'}
									description={
										'This architecture visualization configurator was developed for the startup Kambio. Made with Unreal Engine 5, it allows the user to customize their home and see the changes in real-time.'
									}
									onDetailClick={() => {
										setCurrentGlobalState({
											popupTechId: 'ue5-archvis-configurator',
										});
										setIsPopupDetailsOpen(true);
									}}
									videoID={'T402YGcUt_Y'}
									isActive={activeIndex == 1}
									callToActionColor={colors.blueGreen.medium}
									playUrl={'https://www.kambio.co/'}
									alternativePlayText={"Go to Kambio's website!"}
								/>
							</StyledItem>
						</>
					);
				}}
			</Carousel>
		</>
	);
}
