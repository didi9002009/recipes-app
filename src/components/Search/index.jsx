import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';

import { searchInputPlaceholder, searchResultsUrl } from './constants';
import { closeSearch, setFilteredRecipes } from './actions';
import { getRecipes, getSearchOpenedState } from '../App/selectors';

const styles = theme => ({
	searchInputRoot: {
		width: '100%',
		padding: 0
	},
	searchInput: {
		borderRadius: 0,
		padding: theme.spacing(3.75)
	}
});

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			keyword: ''
		};

		this.getSearchResults = this.getSearchResults.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			keyword: e.target.value
		});
	}

	getSearchResults(e) {
		e.preventDefault();

		const {
			recipes,
			history,
			closeSearch,
			setFilteredRecipes
		} = this.props;
		const { keyword } = this.state;

		const filteredRecipes = recipes.filter(
			recipe =>
				recipe.title.toLowerCase().includes(keyword) ||
				recipe.ingredients.toLowerCase().includes(keyword)
		);

		setFilteredRecipes(filteredRecipes);
		closeSearch();
		history.push(searchResultsUrl);
	}

	render() {
		const { classes, isSearchOpened, closeSearch } = this.props;

		return (
			<Drawer
				open={isSearchOpened}
				anchor='top'
				className={classes.search}
				onClose={closeSearch}
			>
				<form onSubmit={this.getSearchResults}>
					<InputBase
						placeholder={searchInputPlaceholder}
						classes={{
							root: classes.searchInputRoot,
							input: classes.searchInput
						}}
						onChange={this.handleChange}
						autoFocus={true}
					/>
				</form>
			</Drawer>
		);
	}
}

Search.propTypes = {
	classes: PropTypes.object,
	isSearchOpened: PropTypes.bool,
	closeSearch: PropTypes.func,
	history: PropTypes.object,
	setFilteredRecipes: PropTypes.func,
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
	recipes: getRecipes(state),
	isSearchOpened: getSearchOpenedState(state)
});

const mapDispatchToProps = {
	closeSearch,
	setFilteredRecipes
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(withRouter(Search)));
