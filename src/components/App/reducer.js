import { SET_THEME_DARK, SET_THEME_LIGHT } from './constants';

const appReducer = (state = {}, action) => {
	switch (action.type) {
		case SET_THEME_DARK:
		case SET_THEME_LIGHT:
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
};

export default appReducer;
