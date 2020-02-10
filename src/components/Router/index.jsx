import React from 'react';
import { compose } from 'redux';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Login from '../Login';
import App from '../App';
import NotFound from '../NotFound';
import Details from '../Details';
import PrivateRoute from '../PrivateRoute';
import { darkTheme, lightTheme } from '../../theme-config';

const Router = () => {
	// Handle App Theme change
	const isDarkTheme = useSelector(state => state.app.isDarkTheme);
	document.body.className = isDarkTheme ? 'theme-dark' : 'theme-light';
	const theme = isDarkTheme ? darkTheme : lightTheme;

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Login} />
					<PrivateRoute path='/recipes' component={App} />
					<PrivateRoute path='/recipe-:id' component={Details} />
					<PrivateRoute path='' component={NotFound} />
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default compose(firestoreConnect(() => ['recipes']))(Router);
