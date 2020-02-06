import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../Login';
import App from '../App';
import NotFound from '../NotFound';
import PrivateRoute from '../PrivateRoute';

const Router = () => {
	// Handle App Theme change
	const isDarkTheme = useSelector(state => state.app.isDarkTheme);
	document.body.className = isDarkTheme ? 'theme-dark' : 'theme-light';

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/login' component={Login} />
				<PrivateRoute exact path='/recipes' component={App} />
				<PrivateRoute path='' component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
