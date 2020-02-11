import {
	AUTHENTICATION_ERROR,
	AUTHENTICATION_SUCCESS,
	CHANGE_LOGIN_STATUS
} from './constants';
import firebase from 'firebase/app';
import 'firebase/auth';

const authSuccess = () => ({
	type: AUTHENTICATION_SUCCESS
});

const authError = () => ({
	type: AUTHENTICATION_ERROR
});

const setLoginFailed = status => ({
	type: CHANGE_LOGIN_STATUS,
	payload: {
		loginFailed: status
	}
});

export const authenticate = credentials => {
	return dispatch => {
		firebase
			.auth()
			.signInWithEmailAndPassword(credentials.email, credentials.password)
			.then(() => {
				dispatch(authSuccess());
				dispatch(setLoginFailed(false));
			})
			.catch(() => {
				dispatch(authError());
				dispatch(setLoginFailed(true));
			});
	};
};
