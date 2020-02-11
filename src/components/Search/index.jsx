import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Drawer from '@material-ui/core/Drawer';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';

import { searchInputPlaceholder } from './constants';
import { closeSearch } from './actions';
import { getSearchOpenedState } from '../App/selectors';

const styles = theme => ({
	searchInputRoot: {
		padding: 0
	},
	searchInput: {
		borderRadius: 0,
		padding: theme.spacing(3.75)
	}
});

class Search extends React.Component {
	render() {
		const { classes, isSearchOpened, closeSearch } = this.props;

		return (
			<Drawer
				open={isSearchOpened}
				anchor='top'
				className={classes.search}
				onClose={closeSearch}
			>
				<InputBase
					placeholder={searchInputPlaceholder}
					classes={{
						root: classes.searchInputRoot,
						input: classes.searchInput
					}}
				/>
			</Drawer>
		);
	}
}

Search.propTypes = {
	classes: PropTypes.object,
	isSearchOpened: PropTypes.bool,
	closeSearch: PropTypes.func
};

const mapStateToProps = state => ({
	isSearchOpened: getSearchOpenedState(state)
});

const mapDispatchToProps = {
	closeSearch
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(Search));
