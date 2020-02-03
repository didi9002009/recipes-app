import { SET_THEME_DARK, SET_THEME_LIGHT } from './constants';

export const setThemeDark = () => ({
	type: SET_THEME_DARK,
	payload: {
		isDarkTheme: true
	}
});

export const setThemeLight = () => ({
	type: SET_THEME_LIGHT,
	payload: {
		isDarkTheme: false
	}
});
