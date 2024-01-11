import Carousel from '@/components/Carousel.component';
import TV from '@/components/TV.component';

import { StyledRowAlignCenter, StyledCol } from '@/styles/common.styles';
import colors from '@/styles/colors.styles';

export default function GamesCarousel() {
	return (
		<Carousel>
			<ItemGame
				url={'https://www.youtube.com/embed/ZP8HqDud7rk?si=bwvnNUJzxHwCTljx'}
				title={'Luna'}
				description={
					"Luna is a hack n' slash, 3D, isometric game where you play as Lune, a young Teushen monk who trains all day and sweats all night at the sweat shops."
				}
			/>
			<ItemGame
				url={'https://www.youtube.com/embed/DjSxdlxn-m8?si=TRk-ahipAw1Z168A'}
				title={'Other Luna'}
				description={
					"Luna is a hack n' slash, 3D, isometric game where you play as Lune, a young Teushen monk who trains all day and sweats all night at the sweat shops."
				}
			/>
		</Carousel>
	);
}

const ItemGame = ({ url, title, description }) => {
	const urlAutoplayMute = url + '&autoplay=1&mute=1';

	return (
		<StyledRowAlignCenter
			style={{
				gap: '20px',
			}}>
			<TV url={urlAutoplayMute} />
			<StyledCol>
				<span
					style={{
						fontFamily: 'Baloo',
						fontSize: '40px',
						lineHeight: '1',
						fontWeight: '400',
						marginBottom: '30px',
					}}>
					{title}
				</span>
				<span
					style={{
						fontSize: '25px',
						maxWidth: '300px',
					}}>
					{description}
				</span>
				<span
					style={{
						fontSize: '25px',
						color: colors.pink.lightPure,
						marginTop: '50px',
					}}>
					Read more
				</span>
			</StyledCol>
		</StyledRowAlignCenter>
	);
};
