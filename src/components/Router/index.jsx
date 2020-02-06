import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../Login';
import App from '../App';
import NotFound from '../NotFound';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route path='/login' component={Login} />
			<Route path='/recipes' component={App} />
			<Route path='' component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;
