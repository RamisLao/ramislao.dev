'use client';

import styled from 'styled-components';

const MainContainer = styled.div`
	position: relative;
	height: 100vh;
	width: 100%;
`;

const Frame = styled.div`
	position: absolute;
	overflow: hidden; // Clip the image if it goes outside the frame dimensions
	background-repeat: no-repeat;
	// Add other background properties as needed
`;

const TopFrame = styled(Frame)`
	top: 0;
	left: 0;
	right: 0;
	height: 193px; // Adjust as needed
	background-image: url('/images/bg_top.png');
	// Other background properties
`;

const LeftFrame = styled(Frame)`
	top: 0;
	left: 0;
	bottom: 0;
	width: 109px; // Adjust as needed
	background-image: url('/images/bg_left.png');
	// Other background properties
`;

const RightFrame = styled(Frame)`
	top: 0;
	right: 0;
	bottom: 0;
	width: 159px; // Adjust as needed
	background-image: url('/images/bg_right.png');
	// Other background properties
`;

const Content = styled.div`
	overflow-y: scroll; // Enables scrolling for content
`;

export default function HomeLayout({ children }) {
	return (
		<MainContainer>
			<TopFrame />
			<LeftFrame />
			<RightFrame />
			<Content>{children}</Content>
		</MainContainer>
	);
}
