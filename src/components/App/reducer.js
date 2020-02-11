import { SET_THEME_DARK, SET_THEME_LIGHT } from './constants';
import { CHANGE_LOGIN_STATUS } from '../Login/constants';

const initialState = {
	isDarkTheme: true,
	loginFailed: false
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_THEME_DARK:
		case SET_THEME_LIGHT:
		case CHANGE_LOGIN_STATUS:
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
};

export default appReducer;
