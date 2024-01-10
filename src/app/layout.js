import './globals.css';
import StyledComponentsRegistry from '@/lib/registry.lib';

export const metadata = {
	title: 'Ramis Lao',
	description: 'ramislao.dev',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<title>{metadata.title}</title>
				<meta
					name='description'
					content={metadata.description}
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
					href='https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap'
					rel='stylesheet'
				/>
			</head>
			<body>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
