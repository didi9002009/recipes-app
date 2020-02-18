import firebase from 'firebase/app';

import { updateRecipesLimit } from '../List/actions';
import { limitNumber } from '../List/constants';

export const logOut = () => {
	return dispatch => {
		dispatch(updateRecipesLimit(limitNumber));
		firebase.auth().signOut();
		firebase.logout();
	};
};
