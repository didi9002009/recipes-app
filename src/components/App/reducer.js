import { SET_THEME_DARK, SET_THEME_LIGHT } from './constants';
import { CHANGE_LOGIN_STATUS } from '../Login/constants';
import {
	OPEN_SEARCH,
	CLOSE_SEARCH,
	SET_FILTERED_RECIPES
} from '../Search/constants';
import { UPDATE_RECIPES_LIMIT, limitNumber } from '../List/constants';
import {
	OPEN_FORM,
	CLOSE_FORM,
	UPDATE_FORM_TYPE
} from '../AddEditRecipe/constants';
import { SET_CURRENTLY_EDITING_ID } from '../Card/constants';

const initialState = {
	isDarkTheme: true,
	loginFailed: false,
	isSearchOpened: false,
	recipesLimit: limitNumber,
	filteredRecipes: [],
	isFormOpened: false,
	formType: 'add',
	currentlyEditing: null
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_THEME_DARK:
		case SET_THEME_LIGHT:
		case CHANGE_LOGIN_STATUS:
		case OPEN_SEARCH:
		case CLOSE_SEARCH:
		case UPDATE_RECIPES_LIMIT:
		case SET_FILTERED_RECIPES:
		case OPEN_FORM:
		case CLOSE_FORM:
		case UPDATE_FORM_TYPE:
		case SET_CURRENTLY_EDITING_ID:
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
};

export default appReducer;
