import firebase from 'firebase/app';

export const logOut = () => {
	return () => {
		firebase.auth().signOut();
	};
};
