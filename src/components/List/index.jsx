import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

import { getRecipes } from '../App/selectors';

import Card from '../Card';

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
					<TransitionGroup>
						{recipes.map(recipe => (
							<CSSTransition
								key={recipe.id}
								timeout={300}
								classNames='card'
							>
								<Card key={recipe.id} {...recipe} />
							</CSSTransition>
						))}
					</TransitionGroup>
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
