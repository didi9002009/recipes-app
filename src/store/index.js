import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer, createFirestoreInstance } from 'redux-firestore';

import appReducers from '../components/App/reducer';

/* eslint-disable-next-line no-undef */
firebase.initializeApp(process.env.REACT_APP_FIREBASE_CONF);
firebase.firestore();

const rootReducer = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	app: appReducers
});

const composeEnchancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
		trace: true
	}) || compose;

const store = createStore(
	rootReducer,
	composeEnchancers(applyMiddleware(thunk))
);

const rrfConfig = {
	userProfile: 'users',
	useFirestoreForProfile: true
};

export const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance
};

export default store;
