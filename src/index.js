import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/';
import * as serviceWorker from './serviceWorker';
import App from './components/App';

import './styles/_styles.scss';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.register();
