'use client';

import React, { useRef } from 'react';
import styled from 'styled-components';

import colors from '@/styles/colors.styles';
import { StyledCol, StyledRowAlignCenter } from '@/styles/common.styles';
import GamesCarousel from '@/views/GamesCarousel.view';
import MenuLink from '@/components/MenuLink.component';

const ScrollSnapContainer = styled.div`
	scroll-snap-type: y mandatory;
	overflow-y: scroll;
	overflow-x: hidden;
	height: 100vh;
	scroll-behavior: smooth;
`;

const ScrollSnapSection = styled(StyledCol)`
	scroll-snap-align: start;
	height: 100vh;
	width: 100%;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.backgroundColor || colors.white};
`;

const StyledSectionTitle = styled.span`
	font-family: 'Baloo';
	font-size: 128px;
	color: ${(props) => props.color || colors.black};
	font-weight: bold;
`;

const MainPage = () => {
	const sectionGamesRef = useRef(null);
	const sectionTechRef = useRef(null);
	const sectionIllustrationsRef = useRef(null);
	const sectionMusicRef = useRef(null);
	const sectionAboutRef = useRef(null);

	const scrollToSection = (ref) => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<ScrollSnapContainer>
			<ScrollSnapSection>
				<span
					style={{
						fontFamily: 'Baloo',
						fontSize: '160px',
						color: colors.blueGreen.light,
						lineHeight: '1',
						marginBottom: '30px',
						fontWeight: '400',
					}}>
					Ramis Lao
				</span>
				<span
					style={{
						fontSize: '24px',
						color: colors.pink.light,
						fontWeight: 'bold',
					}}>
					Programmer, Game Designer, Illustrator
				</span>
				<img
					src='/images/separator_top.png'
					style={{
						marginTop: '90px',
						width: '800px',
					}}
				/>
				<StyledRowAlignCenter
					style={{
						marginTop: '30px',
						gap: '100px',
					}}>
					<MenuLink
						onClick={() => {
							scrollToSection(sectionGamesRef);
						}}>
						Games
					</MenuLink>
					<MenuLink
						onClick={() => {
							scrollToSection(sectionTechRef);
						}}>
						Tech
					</MenuLink>
					<MenuLink
						onClick={() => {
							scrollToSection(sectionIllustrationsRef);
						}}>
						Illustrations
					</MenuLink>
					<MenuLink
						onClick={() => {
							scrollToSection(sectionMusicRef);
						}}>
						Music
					</MenuLink>
					<MenuLink
						onClick={() => {
							scrollToSection(sectionAboutRef);
						}}>
						About
					</MenuLink>
				</StyledRowAlignCenter>
				<img
					src='/images/separator_top.png'
					style={{
						marginTop: '30px',
						width: '800px',
					}}
				/>
			</ScrollSnapSection>

			<ScrollSnapSection ref={sectionGamesRef}>
				<StyledSectionTitle color={colors.pink.lightPure}>Games</StyledSectionTitle>
				<GamesCarousel />
			</ScrollSnapSection>
			<ScrollSnapSection ref={sectionTechRef}>
				<StyledSectionTitle color={colors.blueGreen.medium}>Tech</StyledSectionTitle>
			</ScrollSnapSection>
			<ScrollSnapSection ref={sectionIllustrationsRef}>
				<StyledSectionTitle color={colors.pink.light}>Illustrations</StyledSectionTitle>
			</ScrollSnapSection>
			<ScrollSnapSection ref={sectionMusicRef}>
				<StyledSectionTitle color={colors.yellow.light}>Music</StyledSectionTitle>
			</ScrollSnapSection>
			<ScrollSnapSection ref={sectionAboutRef}>
				<StyledSectionTitle>About</StyledSectionTitle>
			</ScrollSnapSection>
		</ScrollSnapContainer>
	);
};

export default MainPage;
