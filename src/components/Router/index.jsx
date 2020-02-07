import React from 'react';
import { compose } from 'redux';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';

import Login from '../Login';
import App from '../App';
import NotFound from '../NotFound';
import Details from '../Details';
import PrivateRoute from '../PrivateRoute';

const Router = () => {
	// Handle App Theme change
	const isDarkTheme = useSelector(state => state.app.isDarkTheme);
	document.body.className = isDarkTheme ? 'theme-dark' : 'theme-light';

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Login} />
				<PrivateRoute path='/recipes' component={App} />
				<PrivateRoute path='/recipe-:id' component={Details} />
				<PrivateRoute path='' component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default compose(firestoreConnect(() => ['recipes']))(Router);
