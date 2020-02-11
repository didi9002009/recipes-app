import { OPEN_SEARCH, CLOSE_SEARCH } from './constants';

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
