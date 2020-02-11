import { SET_THEME_DARK, SET_THEME_LIGHT } from './constants';
import { CHANGE_LOGIN_STATUS } from '../Login/constants';
import { OPEN_SEARCH, CLOSE_SEARCH } from '../Search/constants';

const initialState = {
	isDarkTheme: true,
	loginFailed: false,
	isSearchOpened: false
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_THEME_DARK:
		case SET_THEME_LIGHT:
		case CHANGE_LOGIN_STATUS:
		case OPEN_SEARCH:
		case CLOSE_SEARCH:
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
};

export default appReducer;
