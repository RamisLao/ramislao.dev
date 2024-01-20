import colors from '@/styles/colors.styles';

const deviceBreakpoints = {
	minSmall: 0,
	maxSmall: 767,
	minMedium: 768,
	maxMedium: 1023,
	minLarge: 1024,
	maxLarge: 1439,
	minExtraLarge: 1440,
};

const theme = {
	devices: {
		mobile: `(max-width: ${deviceBreakpoints.maxSmall}px)`,
		tablet: `(min-width: ${deviceBreakpoints.minMedium}px) and (max-width: ${deviceBreakpoints.maxMedium}px)`,
		desktop: `(min-width: ${deviceBreakpoints.minLarge}px) and (max-width: ${deviceBreakpoints.maxLarge}px)`,
		largeDesktop: `(min-width: ${deviceBreakpoints.minExtraLarge}px)`,
		notMobile: `(min-width: ${deviceBreakpoints.minMedium}px)`,
	},
	colors: {
		...colors,
	},
};

export default theme;
