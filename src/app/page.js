'use client';

import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import colors from '@/styles/colors.styles';
import { StyledCol, StyledRowAlignCenter } from '@/styles/common.styles';
import GamesCarousel from '@/views/GamesCarousel.view';
import MenuLink from '@/components/MenuLink.component';

const MainTitle = styled.span`
	font-family: 'Baloo';
	color: ${colors.blueGreen.light};
	line-height: 1;
	font-weight: 400;

	@media ${(props) => props.theme.devices.mobile} {
		font-size: 60px;
		margin-bottom: 15px;
	}

	@media ${(props) => props.theme.devices.notMobile} {
		font-size: 160px;
		margin-bottom: 30px;
	}
`;

const MainSubtitle = styled.span`
	color: ${colors.pink.light};
	font-weight: bold;

	@media ${(props) => props.theme.devices.mobile} {
		font-size: 14px;
	}

	@media ${(props) => props.theme.devices.notMobile} {
		font-size: 24px;
	}
`;

const ScrollSnapContainer = styled.div`
	scroll-snap-type: y mandatory;
	overflow-y: scroll;
	overflow-x: hidden;
	height: 100vh;
	scroll-behavior: smooth;
	position: relative;

	.fade-enter {
		opacity: 0;
	}
	.fade-enter-active {
		opacity: 1;
		transition: opacity 300ms ease-in;
	}
	.fade-exit {
		opacity: 1;
	}
	.fade-exit-active {
		opacity: 0;
		transition: opacity 300ms ease-in;
	}
`;

const ScrollSnapSection = styled(StyledCol)`
	scroll-snap-align: start;
	height: 100vh;
	width: 100%;
	align-items: center;
	justify-content: flex-start;
	background-color: ${(props) => props.backgroundColor || colors.white};
`;

const StyledSectionTitle = styled.span`
	font-family: 'Baloo';
	color: ${(props) => props.color || colors.black};
	font-weight: bold;

	@media ${(props) => props.theme.devices.mobile} {
		font-size: 56px;
	}

	@media ${(props) => props.theme.devices.notMobile} {
		font-size: 128px;
	}
`;

const StyledUpButton = styled.button`
	position: fixed;
	border-radius: 20px;
	background-color: ${colors.blueGreen.light};
	color: ${colors.white};
	font-family: 'Baloo';
	font-weight: bold;
	border: none;
	transition: all 0.2s ease-in-out;

	&:hover {
		cursor: pointer;
		background-color: ${colors.blueGreen.medium};
	}

	@media ${(props) => props.theme.devices.mobile} {
		padding: 5px 10px;
		font-size: 14px;
		bottom: 15px;
		right: 60px;
	}

	@media ${(props) => props.theme.devices.notMobile} {
		padding: 10px 20px;
		font-size: 24px;
		bottom: 20px;
		right: 120px;
	}
`;

const StyledMenuMobile = styled(StyledCol)`
	align-items: center;
	justify-content: center;

	@media ${(props) => props.theme.devices.notMobile} {
		display: none;
	}
`;

const StyledMenuDesktop = styled(StyledCol)`
	@media ${(props) => props.theme.devices.mobile} {
		display: none;
	}
`;

const StyledMobileMenuButton = styled(StyledCol)`
	background-image: url(${(props) => props.$image});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	width: 100px;
	height: 100px;
	transition: all 0.2s ease-in-out;

	align-items: center;
	justify-content: center;

	font-family: 'Baloo';
	font-size: 20px;
	font-weight: bold;
	color: ${colors.white};

	&:hover {
		cursor: pointer;
		transform: scale(1.1);
	}
`;

const MainPage = () => {
	const sectionRefs = {
		title: useRef(null),
		games: useRef(null),
		tech: useRef(null),
		illustrations: useRef(null),
		music: useRef(null),
		about: useRef(null),
	};

	const upButtonRef = useRef(null);

	const [showButton, setShowButton] = useState(false);

	const scrollToSection = (ref) => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleScroll = () => {
		let currentSection;
		for (const section in sectionRefs) {
			const ref = sectionRefs[section].current;
			if (ref && ref.getBoundingClientRect().top <= window.innerHeight / 2) {
				currentSection = section;
			}
		}
		setShowButton(currentSection !== 'title');
	};

	useEffect(() => {
		const container = document.querySelector('#scroll-container'); // Adjust the selector to your container
		container.addEventListener('scroll', handleScroll);
		return () => container.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<ScrollSnapContainer id='scroll-container'>
			<ScrollSnapSection
				ref={sectionRefs['title']}
				style={{
					justifyContent: 'center',
				}}>
				<MainTitle>Ramis Lao</MainTitle>
				<MainSubtitle>Programmer, Game Designer, Illustrator</MainSubtitle>
				<StyledMenuMobile>
					<img
						src='/images/separator_top.png'
						style={{
							marginTop: '30px',
							width: '250px',
						}}
					/>
					<StyledRowAlignCenter
						style={{
							gap: '50px',
						}}>
						<StyledMobileMenuButton
							$image='/images/mobile_android/menu_button_games.png'
							onClick={() => {
								scrollToSection(sectionRefs['games']);
							}}>
							<span>Games</span>
						</StyledMobileMenuButton>
						<StyledMobileMenuButton
							$image='/images/mobile_android/menu_button_tech.png'
							onClick={() => {
								scrollToSection(sectionRefs['tech']);
							}}>
							<span>Tech</span>
						</StyledMobileMenuButton>
					</StyledRowAlignCenter>
					<StyledRowAlignCenter
						style={{
							gap: '50px',
						}}>
						<StyledMobileMenuButton
							style={{
								fontSize: '14px',
							}}
							$image='/images/mobile_android/menu_button_illustrations.png'
							onClick={() => {
								scrollToSection(sectionRefs['illustrations']);
							}}>
							<span>Illustrations</span>
						</StyledMobileMenuButton>
						<StyledMobileMenuButton
							$image='/images/mobile_android/menu_button_music.png'
							onClick={() => {
								scrollToSection(sectionRefs['music']);
							}}>
							<span>Music</span>
						</StyledMobileMenuButton>
					</StyledRowAlignCenter>
					<StyledRowAlignCenter>
						<StyledMobileMenuButton
							$image='/images/mobile_android/menu_button_about.png'
							onClick={() => {
								scrollToSection(sectionRefs['about']);
							}}>
							<span>About</span>
						</StyledMobileMenuButton>
					</StyledRowAlignCenter>
				</StyledMenuMobile>
				<StyledMenuDesktop>
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
								scrollToSection(sectionRefs['games']);
							}}>
							Games
						</MenuLink>
						<MenuLink
							onClick={() => {
								scrollToSection(sectionRefs['tech']);
							}}>
							Tech
						</MenuLink>
						<MenuLink
							onClick={() => {
								scrollToSection(sectionRefs['illustrations']);
							}}>
							Illustrations
						</MenuLink>
						<MenuLink
							onClick={() => {
								scrollToSection(sectionRefs['music']);
							}}>
							Music
						</MenuLink>
						<MenuLink
							onClick={() => {
								scrollToSection(sectionRefs['about']);
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
				</StyledMenuDesktop>
			</ScrollSnapSection>

			<ScrollSnapSection
				ref={sectionRefs['games']}
				style={{
					paddingTop: '30px',
				}}>
				<StyledSectionTitle color={colors.pink.lightPure}>Games</StyledSectionTitle>
				<GamesCarousel />
			</ScrollSnapSection>
			<ScrollSnapSection ref={sectionRefs['tech']}>
				<StyledSectionTitle color={colors.blueGreen.medium}>Tech</StyledSectionTitle>
			</ScrollSnapSection>
			<ScrollSnapSection ref={sectionRefs['illustrations']}>
				<StyledSectionTitle color={colors.pink.light}>Illustrations</StyledSectionTitle>
			</ScrollSnapSection>
			<ScrollSnapSection ref={sectionRefs['music']}>
				<StyledSectionTitle color={colors.yellow.light}>Music</StyledSectionTitle>
			</ScrollSnapSection>
			<ScrollSnapSection ref={sectionRefs['about']}>
				<StyledSectionTitle>About</StyledSectionTitle>
			</ScrollSnapSection>
			<CSSTransition
				in={showButton}
				timeout={300}
				classNames='fade'
				unmountOnExit
				nodeRef={upButtonRef}>
				<StyledUpButton
					ref={upButtonRef}
					onClick={() => {
						scrollToSection(sectionRefs['title']);
					}}>
					Back to Top
				</StyledUpButton>
			</CSSTransition>
		</ScrollSnapContainer>
	);
};

export default MainPage;
