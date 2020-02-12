import { UPDATE_RECIPES_LIMIT } from './constants';

export const updateRecipesLimit = limit => ({
	type: UPDATE_RECIPES_LIMIT,
	payload: {
		recipesLimit: limit
	}
});
