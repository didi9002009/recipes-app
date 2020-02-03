import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getRecipes, getAppTheme } from './selectors';
import { setThemeDark } from './actions';

const App = ({ recipes, setThemeDark, isDarkTheme }) => {
	setThemeDark();

	return (
		<div
			className={classNames(
				'app',
				{ 'app--theme-dark': isDarkTheme },
				{ 'app--theme-light': !isDarkTheme }
			)}
		>
			{recipes && recipes.map(({ id, title }) => <p key={id}>{title}</p>)}
		</div>
	);
};

App.propTypes = {
	recipes: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			title: PropTypes.string,
			timeToCook: PropTypes.number,
			portions: PropTypes.number,
			ingredients: PropTypes.string,
			instructions: PropTypes.string
		})
	),
	setThemeDark: PropTypes.func,
	isDarkTheme: PropTypes.bool
};

const mapStateToProps = state => ({
	recipes: getRecipes(state),
	isDarkTheme: getAppTheme(state)
});

const mapDispatchToProps = {
	setThemeDark
};

export default compose(
	firestoreConnect(() => ['recipes']),
	connect(mapStateToProps, mapDispatchToProps)
)(App);
