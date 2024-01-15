'use client';

import './globals.css';
import styled from 'styled-components';

import StyledComponentsRegistry from '@/libs/registry.lib';

const MainContainer = styled.div`
	position: relative;
	height: 100vh;
	width: 100%;
`;

const Frame = styled.div`
	position: absolute;
	overflow: hidden; // Clip the image if it goes outside the frame dimensions
	z-index: 10;
`;

const TopFrame = styled(Frame)`
	top: 0;
	left: 0;
	right: 0;
	height: 160px; // Adjust as needed
	background-image: url('/images/bg_top.png');
`;

const LeftFrame = styled(Frame)`
	top: 0;
	left: 0;
	bottom: 0;
	width: 109px; // Adjust as needed
	background-image: url('/images/bg_left.png');
`;

const RightFrame = styled(Frame)`
	top: 0;
	right: 0;
	bottom: 0;
	width: 159px; // Adjust as needed
	background-image: url('/images/bg_right.png');
`;

const Content = styled.div`
	overflow-y: auto; // Enables scrolling for content
	height: 100%;
	width: 100%;
`;

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<title>{'Ramis Lao'}</title>
				<meta
					name='description'
					content={'ramislao.dev'}
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
				<link
					rel='preconnect'
					href='https://fonts.googleapis.com'
				/>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Baloo:wght@400;800&display=swap'
					rel='stylesheet'
				/>
			</head>
			<body>
				<StyledComponentsRegistry>
					<MainContainer>
						<TopFrame />
						<LeftFrame />
						<RightFrame />
						<Content>{children}</Content>
					</MainContainer>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
