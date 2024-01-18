import { useMediaQuery } from 'react-responsive';

export const useIsMobile = () => {
	return useMediaQuery({
		query: '(max-width: 768px)',
	});
};

export const useIsTablet = () => {
	return useMediaQuery({
		query: '(max-width: 1024px)',
	});
};

export const useIsDesktop = () => {
	return useMediaQuery({
		query: '(min-width: 1025px)',
	});
};

export const useIsLargeDesktop = () => {
	return useMediaQuery({
		query: '(min-width: 1440px)',
	});
};

export const useIsPortrait = () => {
	return useMediaQuery({
		query: '(orientation: portrait)',
	});
};
export const useIsLandscape = () => {
	return useMediaQuery({
		query: '(orientation: landscape)',
	});
};

export const useIsRetina = () => {
	return useMediaQuery({
		query: '(min-resolution: 2dppx)',
	});
};

// media query for not mobile
export const useIsNotMobile = () => {
	return useMediaQuery({
		query: '(min-width: 769px)',
	});
};
