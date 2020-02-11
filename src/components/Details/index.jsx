import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import IconTimer from '@material-ui/icons/Timer';
import IconRestaurant from '@material-ui/icons/Restaurant';
import IconArrowBack from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/core/styles';

import { getRecipes } from '../App/selectors';
import { appHomeUrl } from '../App/constants';
import {
	timeToCookText,
	portionsText,
	ingredientsTitle,
	instructionsTitle
} from './constants';

const styles = theme => ({
	head: {
		backgroundColor: theme.palette.primary.main,
		borderTopWidth: theme.spacing(2),
		borderTopStyle: 'solid',
		borderTopColor: theme.palette.primary.dark,
		position: 'relative',
		color: '#fff'
	},
	back: {
		position: 'absolute',
		left: theme.spacing(0.5),
		top: theme.spacing(1.5),
		color: 'inherit'
	},
	title: {
		marginBottom: theme.spacing(2)
	},
	iconList: {
		opacity: '0.87'
	},
	iconListSpan: {
		marginLeft: theme.spacing(0.5)
	},
	subtitle: {
		marginBottom: theme.spacing(1.5)
	},
	list: {
		padding: 0,
		paddingLeft: theme.spacing(2.5),
		marginBottom: theme.spacing(3),
		lineHeight: 1.4,
		listStyle: 'disc',
		opacity: '0.87'
	},
	listItem: {
		padding: 0
	},
	paragraph: {
		opacity: '0.87'
	}
});

class Details extends React.Component {
	render() {
		const { match, recipes, classes } = this.props;
		const recipe =
			recipes && recipes.find(recipe => recipe.id === match.params.id);

		return (
			<React.Fragment>
				<Paper square={true} elevation={5} className={classes.head}>
					<Container>
						<Box pt={3} pr={1} pb={3} pl={5}>
							<IconButton
								component={Link}
								to={appHomeUrl}
								className={classes.back}
							>
								<IconArrowBack />
							</IconButton>

							<Typography variant='h1' className={classes.title}>
								{recipe.title}
							</Typography>

							<Box
								display='flex'
								flexDirection='row'
								alignItems='center'
								className={classes.iconList}
							>
								<Box display='flex' alignItems='center'>
									<IconTimer fontSize='small' />

									<Typography
										component='span'
										className={classes.iconListSpan}
									>
										{recipe.timeToCook} {timeToCookText}
									</Typography>
								</Box>

								<Box display='flex' alignItems='center' ml={2}>
									<IconRestaurant fontSize='small' />

									<Typography
										component='span'
										className={classes.iconListSpan}
									>
										{recipe.portions} {portionsText}
									</Typography>
								</Box>
							</Box>
						</Box>
					</Container>
				</Paper>

				<Box pt={3} pr={1} pb={3} pl={5}>
					<Container>
						<Box>
							<Typography
								variant='h3'
								className={classes.subtitle}
							>
								{ingredientsTitle}
							</Typography>

							<ul className={classes.list}>
								{recipe.ingredients
									.split(',')
									.map(ingredient => (
										<li
											key={ingredient}
											className={classes.listItem}
										>
											{ingredient}
										</li>
									))}
							</ul>

							<Typography
								variant='h3'
								className={classes.subtitle}
							>
								{instructionsTitle}
							</Typography>

							<Typography className={classes.paragraph}>
								{recipe.instructions}
							</Typography>
						</Box>
					</Container>
				</Box>
			</React.Fragment>
		);
	}
}

Details.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string
		})
	}),
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
	classes: PropTypes.object
};

const mapStateToProps = state => ({
	recipes: getRecipes(state)
});

export default connect(mapStateToProps)(withStyles(styles)(Details));
