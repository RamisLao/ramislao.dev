import styled from 'styled-components';

import TV from '@/components/TV.component';
import { StyledCol } from '@/styles/common.styles';

import colors from '@/styles/colors.styles';

const StyledItemContainer = styled.div`
	gap: 20px;

	@media ${(props) => props.theme.devices.mobile} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 280px;
	}

	@media ${(props) => props.theme.devices.notMobile} {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 1200px;
	}
`;

const StyledItemTitle = styled.div`
	font-family: 'Baloo';
	font-weight: 400;
	line-height: 1;
	color: ${colors.black};
	width: 100%;
	text-align: center;

	@media ${(props) => props.theme.devices.mobile} {
		font-size: 25px;
	}

	@media ${(props) => props.theme.devices.notMobile} {
		font-size: 30px;
	}
`;

const StyledItemDescription = styled.div`
	color: ${colors.black};
	max-width: 300px;
	text-align: center;

	@media ${(props) => props.theme.devices.mobile} {
		font-size: 16px;
	}

	@media ${(props) => props.theme.devices.notMobile} {
		font-size: 20px;
	}
`;

const StyledItemCallToAction = styled.span`
	font-weight: bold;
	color: ${(props) => props.$color};
	transition: all 0.2s ease-in-out;
	width: fit-content;
	max-width: 300px;

	&:hover {
		cursor: pointer;
	}

	&:hover::after {
		content: '';
		display: block;
		width: 100%;
		height: 2px;
		background-color: ${(props) => props.$color};
		animation: underlineSlide 0.3s forwards;
	}

	@keyframes underlineSlide {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	@media ${(props) => props.theme.devices.mobile} {
		font-size: 20px;
	}

	@media ${(props) => props.theme.devices.notMobile} {
		font-size: 25px;
	}
`;

export default function CarouselItem({
	videoUrl,
	title,
	description,
	onDetailClick,
	isActive,
	callToActionColor = colors.pink.lightPure,
	hidePlayButton = false,
	playUrl,
	alternativePlayText = null,
}) {
	const urlAutoplayMute = videoUrl + `&mute=1`;

	return (
		<StyledItemContainer>
			{isActive && <TV url={urlAutoplayMute} />}
			<StyledCol
				style={{
					height: '100%',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<StyledItemTitle
					style={{
						marginBottom: '30px',
					}}>
					{title}
				</StyledItemTitle>
				<StyledItemDescription>{description}</StyledItemDescription>
				<StyledItemCallToAction
					$color={callToActionColor}
					style={{
						marginTop: '24px',
					}}
					onClick={() => {
						onDetailClick();
					}}>
					Read about my role
				</StyledItemCallToAction>
				{!hidePlayButton && (
					<StyledItemCallToAction
						$color={callToActionColor}
						style={{
							marginTop: '10px',
						}}
						onClick={() => {
							open(playUrl, '_blank');
						}}>
						{alternativePlayText ? alternativePlayText : 'Play the game!'}
					</StyledItemCallToAction>
				)}
			</StyledCol>
		</StyledItemContainer>
	);
}
