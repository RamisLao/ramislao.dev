'use client';

import styled from 'styled-components';

const VideoContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	@media ${(props) => props.theme.devices.mobile} {
		width: 280px;
		height: 158px;
	}

	@media ${(props) => props.theme.devices.notMobile} {
		width: 809px; // Set the width to your preference or dynamically
		height: 461px; // Set the height to match the aspect ratio of the video
	}
`;

const TransparentGif = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%; // Match the container's size
	height: 100%; // Match the container's size
	pointer-events: none; // Make sure the gif doesn't block clicks
`;

const YouTubeVideo = styled.iframe`
	@media ${(props) => props.theme.devices.mobile} {
		width: 224px;
		height: 126px;
	}

	@media ${(props) => props.theme.devices.notMobile} {
		width: 652.8px;
		height: 367.2px;
	}
`;

export default function TV({ url }) {
	return (
		<VideoContainer>
			<YouTubeVideo
				src={url}
				frameBorder='0'
				title='YouTube video player'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowFullScreen
			/>
			<TransparentGif
				src='/gifs/tv.gif'
				alt='Transparent Gif'
			/>
		</VideoContainer>
	);
}
