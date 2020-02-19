import { OPEN_FORM, CLOSE_FORM, UPDATE_FORM_TYPE } from './constants';

export const openForm = () => ({
	type: OPEN_FORM,
	payload: {
		isFormOpened: true
	}
});

export const closeForm = () => ({
	type: CLOSE_FORM,
	payload: {
		isFormOpened: false,
		currentlyEditing: null
	}
});

export const updateFormType = type => ({
	type: UPDATE_FORM_TYPE,
	payload: {
		formType: type
	}
});
