import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';

import Header from '../Header';
import Footer from '../Footer';
import List from '../List';

import { getFilteredRecipes } from '../App/selectors';

const SearchResults = ({ filteredRecipes }) => (
	<Box display='flex' flexDirection='column' height='100%' pt={10}>
		<Header />
		<List recipes={filteredRecipes} />
		<Footer />
	</Box>
);

SearchResults.propTypes = {
	filteredRecipes: PropTypes.arrayOf(
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
	filteredRecipes: getFilteredRecipes(state)
});

export default connect(mapStateToProps)(SearchResults);
