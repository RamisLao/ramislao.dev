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
				childrenLength={5}>
				{({ activeIndex }) => {
					return (
						<>
							<StyledItem>
								<CarouselItem
									videoUrl={'https://www.youtube.com/embed/jg1zoCG5wBg?si=QYD4hQ8uRzLKLssE'}
									title={'Hyper Cheats Web App (2023)'}
									description={
										'Hyper Cheats is a web app made for internal use at Mexican game development studio HyperBeard. It allows the team to manage and easily create cheats and rewards for their games. It was developed using React and Node.'
									}
									onDetailClick={() => {
										setCurrentGlobalState({
											popupTechId: 'hyper-cheats-web-app',
										});
										setIsPopupDetailsOpen(true);
									}}
									isActive={activeIndex == 0}
									callToActionColor={colors.blueGreen.medium}
									playUrl={'https://hyperbeard.com/'}
									alternativePlayText={"Go to HyperBeard's website!"}
								/>
							</StyledItem>
							<StyledItem>
								<CarouselItem
									videoUrl={'https://www.youtube.com/embed/T402YGcUt_Y?si=keY8uyQizOrTnDDI'}
									title={'UE5 Archvis Configurator (2023)'}
									description={
										'This architecture visualization configurator was developed for the startup Kambio. Made with Unreal Engine 5, it allows the user to customize their home and see the changes in real-time.'
									}
									onDetailClick={() => {
										setCurrentGlobalState({
											popupTechId: 'ue5-archvis-configurator',
										});
										setIsPopupDetailsOpen(true);
									}}
									isActive={activeIndex == 1}
									callToActionColor={colors.blueGreen.medium}
									playUrl={'https://www.kambio.co/'}
									alternativePlayText={"Go to Kambio's website!"}
								/>
							</StyledItem>
							<StyledItem>
								<CarouselItem
									videoUrl={'https://www.youtube.com/embed/bPQogR7FPmY?si=xqq_LduETfh7MP29'}
									title={'Marakana Combine App (2019)'}
									description={
										'Combine was the first iteration of the Marakana (now called GetRival) app. It was developed for iOS. It allowed users to record themselves doing physical challenges related to soccer, get evaluated by AI, and compete with friends.'
									}
									onDetailClick={() => {
										setCurrentGlobalState({
											popupTechId: 'marakana-combine-app',
										});
										setIsPopupDetailsOpen(true);
									}}
									isActive={activeIndex == 2}
									callToActionColor={colors.blueGreen.medium}
									playUrl={'https://www.getrival.com/'}
									alternativePlayText={"Go to Get Rival's website!"}
								/>
							</StyledItem>
							<StyledItem>
								<CarouselItem
									videoUrl={'https://www.youtube.com/embed/H_BtefOD1Go?si=MSCgExwvD_HreC5y'}
									title={'Custom-Made Touchscreen Table (2018)'}
									description={
										'I co-designed and co-developed a custom-made touchscreen table with the startup Catalyst. It was round and 5 meters in diameter and was used to showcase Mexican technology during the 2018 Hannover Messe 4.0 Festival.'
									}
									onDetailClick={() => {
										setCurrentGlobalState({
											popupTechId: 'custom-made-touchscreen-table',
										});
										setIsPopupDetailsOpen(true);
									}}
									isActive={activeIndex == 3}
									callToActionColor={colors.blueGreen.medium}
									hidePlayButton={true}
								/>
							</StyledItem>
							<StyledItem>
								<CarouselItem
									videoUrl={'https://www.youtube.com/embed/6FYEMpUmDBY?si=jD2tcGErI3OgEIWj'}
									title={'Simple Predict (2017)'}
									description={
										"Co-led the team that developed Simple Predict, SimplifAI's first product. Simple Predict was a web app that allowed non-technical users to create and train machine learning models using nothing more than a spreadsheet."
									}
									onDetailClick={() => {
										setCurrentGlobalState({
											popupTechId: 'simple-predict',
										});
										setIsPopupDetailsOpen(true);
									}}
									isActive={activeIndex == 4}
									callToActionColor={colors.blueGreen.medium}
									hidePlayButton={true}
								/>
							</StyledItem>
						</>
					);
				}}
			</Carousel>
		</>
	);
}
