import * as authStatus from './constants';
import firebase from 'firebase/app';
import 'firebase/auth';

const authSuccess = () => ({
	type: authStatus.AUTHENTICATION_SUCCESS
});

const authError = () => ({
	type: authStatus.AUTHENTICATION_ERROR
});

export const authenticate = (credentials, history) => {
	return dispatch => {
		firebase
			.auth()
			.signInWithEmailAndPassword(credentials.email, credentials.password)
			.then(() => {
				dispatch(authSuccess());

				history.push('/recipes');
			})
			.catch(() => {
				dispatch(authError());
				firebase.auth().signOut();
			});
	};
};
