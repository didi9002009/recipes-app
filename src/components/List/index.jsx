import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { limitNumber, loadMoreText } from './constants';
import { updateRecipesLimit } from './actions';

import SimpleCard from '../Card';
import { getRecipesLimit } from '../App/selectors';

const styles = theme => ({
	list: {
		flex: '1 1 auto',
		marginTop: theme.spacing(2)
	},
	grid: {
		marginBottom: theme.spacing(1.5)
	}
});

class List extends React.Component {
	constructor(props) {
		super(props);

		this.loadMore = this.loadMore.bind(this);
	}

	loadMore() {
		const { limit, updateRecipesLimit } = this.props;

		updateRecipesLimit(limit + limitNumber);
	}

	render() {
		const { recipes, classes, limit } = this.props;

		return recipes ? (
			<Box className={classes.list}>
				<Container>
					<Grid container spacing={2} className={classes.grid}>
						{recipes.slice(0, limit).map(recipe => (
							<Grid
								key={recipe.id}
								item
								xs={12}
								sm={6}
								md={4}
								lg={3}
							>
								<SimpleCard key={recipe.id} {...recipe} />
							</Grid>
						))}
					</Grid>

					{limit < recipes.length ? (
						<Box pt={2} pb={2} textAlign='center'>
							<Button color='primary' onClick={this.loadMore}>
								{loadMoreText}
							</Button>
						</Box>
					) : null}
				</Container>
			</Box>
		) : null;
	}
}

List.propTypes = {
	recipes: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			timeToCook: PropTypes.string,
			portions: PropTypes.string,
			ingredients: PropTypes.string,
			instructions: PropTypes.string
		})
	),
	classes: PropTypes.object,
	limit: PropTypes.number,
	updateRecipesLimit: PropTypes.func
};

const mapStateToProps = state => ({
	limit: getRecipesLimit(state)
});

const mapDisptachToProps = {
	updateRecipesLimit
};

export default connect(
	mapStateToProps,
	mapDisptachToProps
)(withStyles(styles)(List));
