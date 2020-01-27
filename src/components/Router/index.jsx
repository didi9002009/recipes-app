import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Home';
import Inner from '../Inner';
import NotFound from '../NotFound';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/recipe-:id" component={Inner} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;
