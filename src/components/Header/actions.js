import firebase from 'firebase/app';

import { updateRecipesLimit } from '../List/actions';
import { limitNumber } from '../List/constants';

export const logOut = () => {
	return dispatch => {
		firebase.auth().signOut();
		firebase.logout();
		dispatch(updateRecipesLimit(limitNumber));
	};
};
