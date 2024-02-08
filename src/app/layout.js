'use client';

import './globals.css';
import styled, { ThemeProvider } from 'styled-components';

import theme from '@/libs/styledComponentsTheme.lib';
import StyledComponentsRegistry from '@/libs/registry.lib';
import { GlobalContextProvider } from '@/contexts/global.context';

const MainContainer = styled.div`
	position: relative;
	height: 100vh;
	width: 100%;
`;

const Frame = styled.div`
	position: absolute;
	z-index: 10;
`;

const TopFrame = styled(Frame)`
	top: 0;
	left: 0;
	right: 0;
`;

const LeftFrame = styled(Frame)`
	top: 0;
	left: 0;
	bottom: 0;
`;

const RightFrame = styled(Frame)`
	top: 0;
	right: 0;
	bottom: 0;
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
				<GlobalContextProvider>
					<ThemeProvider theme={theme}>
						<StyledComponentsRegistry>
							<MainContainer>
								<TopFrame>
									<picture>
										<source
											media={theme.devices.mobile}
											srcSet='/images/mobile_android/bg_top.png'
										/>
										<source
											media={theme.devices.notMobile}
											srcSet='/images/desktop_big/bg_top.png'
										/>
										<img
											src='/images/mobile_android/bg_top.png'
											alt='Top Frame'
											style={{
												width: '100%',
												height: 'auto',
												maxHeight: '100%',
												objectFit: 'contain',
											}}
										/>
									</picture>
								</TopFrame>
								<LeftFrame>
									<picture>
										<source
											media={theme.devices.mobile}
											srcSet='/images/mobile_android/bg_left.png'
										/>
										<source
											media={theme.devices.notMobile}
											srcSet='/images/desktop_big/bg_left.png'
										/>
										<img
											src='/images/mobile_android/bg_left.png'
											alt='Left Frame'
											style={{
												width: 'auto',
												height: '100%',
												maxWidth: '100%',
												objectFit: 'contain',
											}}
										/>
									</picture>
								</LeftFrame>
								<RightFrame>
									<picture>
										<source
											media={theme.devices.mobile}
											srcSet='/images/mobile_android/bg_right.png'
										/>
										<source
											media={theme.devices.notMobile}
											srcSet='/images/desktop_big/bg_right.png'
										/>
										<img
											src='/images/mobile_android/bg_right.png'
											alt='Right Frame'
											style={{
												width: 'auto',
												height: '100%',
												maxWidth: '100%',
												objectFit: 'contain',
											}}
										/>
									</picture>
								</RightFrame>
								<Content>{children}</Content>
							</MainContainer>
						</StyledComponentsRegistry>
					</ThemeProvider>
				</GlobalContextProvider>
			</body>
		</html>
	);
}
