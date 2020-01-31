import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer, createFirestoreInstance } from 'redux-firestore';

import { fbConfig, rrfConfig } from '../config';

firebase.initializeApp(fbConfig);
firebase.firestore();

const rootReducer = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer
});

const composeEnchancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnchancers(applyMiddleware(thunk))
);

export const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance
};

export default store;
