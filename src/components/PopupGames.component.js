import PopupGenericFullScreen from './PopupGenericFullScreen.component';

export default function PopupGames({ onClose }) {
	return (
		<PopupGenericFullScreen onClickOutside={onClose}>
			{({ handleClose }) => {
				return (
					<div
						style={{
							height: '100vh',
							width: '100vw',
						}}>
						<button onClick={handleClose}>Close</button>
						<img
							src='/gifs/tv.gif'
							style={{
								width: '100%',
								height: '100%',
							}}
						/>
					</div>
				);
			}}
		</PopupGenericFullScreen>
	);
}
