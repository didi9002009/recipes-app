import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';

import { getAuth, getProfile } from '../App/selectors';
import { appLoginUrl } from '../App/constants';

const PrivateRoute = ({ component: Component, auth, profile, ...rest }) => {
	return isLoaded(profile) ? (
		<Route
			{...rest}
			render={(props, location) =>
				!isEmpty(auth) ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: appLoginUrl,
							state: { from: location }
						}}
					/>
				)
			}
		></Route>
	) : null;
};

PrivateRoute.propTypes = {
	component: PropTypes.any,
	auth: PropTypes.object,
	profile: PropTypes.object,
	location: PropTypes.object
};

const mapStateToProps = state => ({
	auth: getAuth(state),
	profile: getProfile(state)
});

export default compose(
	firestoreConnect(() => [
		{
			collection: 'recipes',
			orderBy: ['timestamp', 'desc']
		}
	])
)(connect(mapStateToProps)(PrivateRoute));
