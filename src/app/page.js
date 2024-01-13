'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import colors from '@/styles/colors.styles';
import { StyledCol, StyledRowAlignCenter } from '@/styles/common.styles';
import GamesCarousel from '@/views/GamesCarousel.view';

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

const Page = () => {
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
						fontSize: '140px',
						color: colors.blueGreen.light,
						lineHeight: '1',
						marginBottom: '20px',
						fontWeight: '400',
					}}>
					Ramis Lao
				</span>
				<span
					style={{
						fontSize: '20px',
						color: colors.pink.light,
						fontWeight: 'bold',
					}}>
					Game Designer, Programmer, Illustrator
				</span>
				<img
					src='/images/separator_top.png'
					style={{
						marginTop: '30px',
						width: '630px',
					}}
				/>
				<StyledRowAlignCenter
					style={{
						marginTop: '30px',
						gap: '80px',
					}}>
					<MenuLink
						href='/'
						imageUrl={'url(/images/ornament_games.png)'}
						padding={'0px 0px 0px 12px'}
						width={'102px'}
						height={'66px'}
						margin={'0px 20px 0px 0px'}>
						Games
					</MenuLink>
					<MenuLink
						href='/'
						imageUrl={'url(/images/ornament_tech.png)'}
						width={'83px'}
						height={'55px'}
						padding={'0px 10px 0px 0px'}>
						Tech
					</MenuLink>
					<MenuLink
						href='/'
						imageUrl={'url(/images/ornament_illustrations.png)'}
						width={'175px'}
						height={'65px'}
						padding={'0px 0px 0px 0px'}>
						Illustrations
					</MenuLink>
					<MenuLink
						href='/'
						imageUrl={'url(/images/ornament_music.png)'}
						width={'115px'}
						height={'50px'}
						padding={'0px 18px 0px 0px'}
						margin={'0px 0px 0px 20px'}>
						Music
					</MenuLink>
					<MenuLink
						href='/'
						imageUrl={'url(/images/ornament_about.png)'}
						width={'103px'}
						height={'56px'}
						padding={'0px 4px 0px 0px'}>
						About
					</MenuLink>
				</StyledRowAlignCenter>
				<img
					src='/images/separator_bottom.png'
					style={{
						marginTop: '30px',
						width: '630px',
					}}
				/>
			</ScrollSnapSection>

			<ScrollSnapSection
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					height: '100vh',
					width: '100%',
				}}>
				<span
					style={{
						fontSize: '80px',
						color: colors.yellow.light,
						fontWeight: 'bold',
						marginTop: '150px',
						marginBottom: '50px',
					}}>
					Games
				</span>
				<GamesCarousel />
			</ScrollSnapSection>
		</ScrollSnapContainer>
	);
};

const LinkBackground = styled(StyledCol)`
	align-items: center;
	justify-content: center;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	background-image: none;

	&:hover {
		background-image: ${(props) => props.$imageUrl};
	}
`;

const MenuLink = ({ href, children, imageUrl, padding, width, height, margin }) => {
	return (
		<Link
			href={href}
			style={{
				textDecoration: 'none',
				color: colors.blueGreen.medium,
				fontSize: '30px',
				fontWeight: '900',
				margin,
			}}>
			<LinkBackground
				$imageUrl={imageUrl}
				width={width}
				height={height}>
				<span
					style={{
						padding,
					}}>
					{children}
				</span>
			</LinkBackground>
		</Link>
	);
};

export default Page;
