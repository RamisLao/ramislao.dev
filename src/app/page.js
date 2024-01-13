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
`;

const MainPage = () => {
	const sectionGamesRef = useRef(null);

	const scrollToSection = (ref) => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<ScrollSnapContainer>
			<ScrollSnapSection
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					height: '100vh',
				}}>
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
					<MenuLink>Tech</MenuLink>
					<MenuLink>Illustrations</MenuLink>
					<MenuLink>Music</MenuLink>
					<MenuLink>About</MenuLink>
				</StyledRowAlignCenter>
				<img
					src='/images/separator_top.png'
					style={{
						marginTop: '30px',
						width: '800px',
					}}
				/>
			</ScrollSnapSection>

			<ScrollSnapSection
				ref={sectionGamesRef}
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					height: '100vh',
					width: '100%',
					backgroundColor: colors.white,
				}}>
				<span
					style={{
						fontFamily: 'Baloo',
						fontSize: '128px',
						color: colors.pink.lightPure,
						fontWeight: 'bold',
					}}>
					Games
				</span>
				<GamesCarousel />
			</ScrollSnapSection>
		</ScrollSnapContainer>
	);
};

export default MainPage;
