import { SET_CURRENTLY_EDITING_ID } from './constants';

export const setCurrentlyEditingId = id => ({
	type: SET_CURRENTLY_EDITING_ID,
	payload: {
		currentlyEditing: id
	}
});
