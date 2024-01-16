'use client';

import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

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
	justify-content: center;
	background-color: ${(props) => props.backgroundColor || colors.white};
`;

const StyledSectionTitle = styled.span`
	font-family: 'Baloo';
	font-size: 128px;
	color: ${(props) => props.color || colors.black};
	font-weight: bold;
`;

const StyledUpButton = styled.button`
	position: fixed;
	bottom: 20px;
	right: 120px;
	padding: 10px 20px;
	border-radius: 20px;
	background-color: ${colors.blueGreen.light};
	color: ${colors.white};
	font-family: 'Baloo';
	font-size: 24px;
	font-weight: bold;
	border: none;
	transition: all 0.2s ease-in-out;

	&:hover {
		cursor: pointer;
		background-color: ${colors.blueGreen.medium};
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
			<ScrollSnapSection ref={sectionRefs['title']}>
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
			</ScrollSnapSection>

			<ScrollSnapSection ref={sectionRefs['games']}>
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
						console.log('click');
						scrollToSection(sectionRefs['title']);
					}}>
					Back to Top
				</StyledUpButton>
			</CSSTransition>
		</ScrollSnapContainer>
	);
};

export default MainPage;
