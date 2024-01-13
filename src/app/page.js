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
						href='/'
						padding={'0px 0px 0px 12px'}
						width={'102px'}
						height={'66px'}
						margin={'0px 20px 0px 0px'}>
						Games
					</MenuLink>
					<MenuLink
						href='/'
						width={'83px'}
						height={'55px'}
						padding={'0px 10px 0px 0px'}>
						Tech
					</MenuLink>
					<MenuLink
						href='/'
						width={'175px'}
						height={'65px'}
						padding={'0px 0px 0px 0px'}>
						Illustrations
					</MenuLink>
					<MenuLink
						href='/'
						width={'115px'}
						height={'50px'}
						padding={'0px 18px 0px 0px'}
						margin={'0px 0px 0px 20px'}>
						Music
					</MenuLink>
					<MenuLink
						href='/'
						width={'103px'}
						height={'56px'}
						padding={'0px 4px 0px 0px'}>
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

			<ScrollSnapSection
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					height: '100vh',
					width: '100%',
					backgroundColor: colors.yellow.light,
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

const LinkBackground = styled(StyledCol)`
	align-items: center;
	justify-content: center;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	background-image: none;
	transition: transform 0.1s ease-in-out;

	&:hover {
		color: ${colors.yellow.light};
		transform: scale(1.1);
	}
`;

const MenuLink = ({ href, children, imageUrl, padding, width, height, margin }) => {
	return (
		<Link
			href={href}
			style={{
				textDecoration: 'none',
				color: colors.blueGreen.medium,
				fontSize: '32px',
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
