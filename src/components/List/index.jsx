import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { getRecipes } from '../App/selectors';

import SimpleCard from '../Card';

const styles = theme => ({
	list: {
		flex: '1 1 auto',
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(8)
	}
});

class List extends React.Component {
	render() {
		const { recipes, classes } = this.props;

		return recipes ? (
			<Box className={classes.list}>
				<Container>
					<Grid container spacing={2}>
						{recipes.map(recipe => (
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
				</Container>
			</Box>
		) : null;
	}
}

List.propTypes = {
	recipes: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			timeToCook: PropTypes.number,
			portions: PropTypes.number,
			ingredients: PropTypes.string,
			instructions: PropTypes.string
		})
	),
	classes: PropTypes.object
};

const mapStateToProps = state => ({
	recipes: getRecipes(state)
});

export default connect(mapStateToProps)(withStyles(styles)(List));
