import {
	AUTHENTICATION_ERROR,
	AUTHENTICATION_SUCCESS,
	homeUrl
} from './constants';
import firebase from 'firebase/app';
import 'firebase/auth';

const authSuccess = () => ({
	type: AUTHENTICATION_SUCCESS
});

const authError = () => ({
	type: AUTHENTICATION_ERROR
});

export const authenticate = (credentials, history) => {
	return dispatch => {
		firebase
			.auth()
			.signInWithEmailAndPassword(credentials.email, credentials.password)
			.then(() => {
				dispatch(authSuccess());

				setTimeout(() => history.push(homeUrl), 1500);
			})
			.catch(() => {
				dispatch(authError());
				firebase.auth().signOut();
			});
	};
};
