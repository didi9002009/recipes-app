import { OPEN_SEARCH, CLOSE_SEARCH, SET_FILTERED_RECIPES } from './constants';

export const openSearch = () => ({
	type: OPEN_SEARCH,
	payload: {
		isSearchOpened: true
	}
});

export const closeSearch = () => ({
	type: CLOSE_SEARCH,
	payload: {
		isSearchOpened: false
	}
});

export const setFilteredRecipes = filteredRecipes => ({
	type: SET_FILTERED_RECIPES,
	payload: {
		filteredRecipes
	}
});
