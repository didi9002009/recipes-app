import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer, createFirestoreInstance } from 'redux-firestore';

const fbConfig = {
	apiKey: 'AIzaSyBBPv8WVNZrzDdDrJUY-mOo2edoT3lgbhA',
	authDomain: 'recipes-app-de2a9.firebaseapp.com',
	databaseURL: 'https://recipes-app-de2a9.firebaseio.com',
	projectId: 'recipes-app-de2a9',
	storageBucket: 'recipes-app-de2a9.appspot.com',
	messagingSenderId: '773335171097',
	appId: '1:773335171097:web:eef84dff62e6d38c'
};

const rrfConfig = {
	userProfile: 'users',
	useFirestoreForProfile: true
};

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
