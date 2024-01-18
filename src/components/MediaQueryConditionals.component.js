import {
	useIsMobile,
	useIsTablet,
	useIsDesktop,
	useIsLargeDesktop,
	useIsPortrait,
	useIsLandscape,
	useIsRetina,
	useIsNotMobile,
} from '@/hooks/reactResponsive.hook';

export const Mobile = ({ children }) => {
	const isMobile = useIsMobile();
	return isMobile ? children : null;
};

export const Tablet = ({ children }) => {
	const isTablet = useIsTablet();
	return isTablet ? children : null;
};

export const Desktop = ({ children }) => {
	const isDesktop = useIsDesktop();
	return isDesktop ? children : null;
};

export const LargeDesktop = ({ children }) => {
	const isLargeDesktop = useIsLargeDesktop();
	return isLargeDesktop ? children : null;
};

export const Portrait = ({ children }) => {
	const isPortrait = useIsPortrait();
	return isPortrait ? children : null;
};

export const Landscape = ({ children }) => {
	const isLandscape = useIsLandscape();
	return isLandscape ? children : null;
};

export const Retina = ({ children }) => {
	const isRetina = useIsRetina();
	return isRetina ? children : null;
};

export const NotMobile = ({ children }) => {
	const isNotMobile = useIsNotMobile();
	return isNotMobile ? children : null;
};
