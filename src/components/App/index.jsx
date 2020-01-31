import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

import { getRecipes } from './selectors';

const App = ({ recipes }) => (
	<div>
		{recipes && recipes.map(({ id, title }) => <p key={id}>{title}</p>)}
	</div>
);

App.propTypes = {
	recipes: PropTypes.array
};

const mapStateToProps = state => ({
	recipes: getRecipes(state)
});

export default compose(
	firestoreConnect(() => ['recipes']),
	connect(mapStateToProps)
)(App);
