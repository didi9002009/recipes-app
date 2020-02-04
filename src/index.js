import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import store, { rrfProps } from './store/';
import * as serviceWorker from './serviceWorker';

import Router from './components/Router';

import './styles/_styles.scss';

ReactDOM.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<Router />
		</ReactReduxFirebaseProvider>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.register();
