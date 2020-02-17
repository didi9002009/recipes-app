import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../Header';
import List from '../List';
import AddRecipe from '../AddRecipe';
import Footer from '../Footer';

import { getRecipes } from './selectors';

const useStyles = makeStyles(theme => ({
	app: {
		display: 'flex',
		flexFlow: 'column',
		minHeight: '100%',
		paddingTop: theme.spacing(10),
		position: 'relative'
	}
}));

const App = ({ recipes }) => {
	const classes = useStyles();

	return (
		<Box className={classes.app}>
			<Header />
			<List recipes={recipes} />
			<Footer />
			<AddRecipe />
		</Box>
	);
};

App.propTypes = {
	recipes: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			timeToCook: PropTypes.string,
			portions: PropTypes.string,
			ingredients: PropTypes.string,
			instructions: PropTypes.string
		})
	)
};

const mapStateToProps = state => ({
	recipes: getRecipes(state)
});

export default connect(mapStateToProps)(App);
