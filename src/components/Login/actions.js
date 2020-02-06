import { AUTHENTICATION_ERROR, AUTHENTICATION_SUCCESS } from './constants';
import firebase from 'firebase/app';
import 'firebase/auth';

const authSuccess = () => ({
	type: AUTHENTICATION_SUCCESS
});

const authError = () => ({
	type: AUTHENTICATION_ERROR
});

export const authenticate = credentials => {
	return dispatch => {
		firebase
			.auth()
			.signInWithEmailAndPassword(credentials.email, credentials.password)
			.then(() => {
				dispatch(authSuccess());
			})
			.catch(() => {
				dispatch(authError());
				firebase.auth().signOut();
			});
	};
};
