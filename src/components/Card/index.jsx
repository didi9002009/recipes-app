import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconTimer from '@material-ui/icons/Timer';
import IconRestaurant from '@material-ui/icons/Restaurant';

import {
	timeToCookText,
	portionsText,
	buttonViewText,
	buttonEditText
} from './constants';
import { setCurrentlyEditingId } from './actions';
import { openForm, updateFormType } from '../AddEditRecipe/actions';
import { getProfile } from '../App/selectors';

const styles = theme => ({
	card: {
		display: 'flex',
		flexFlow: 'column',
		height: '100%'
	},
	content: {
		flex: '1 1 auto',
		padding: theme.spacing(3),
		paddingBottom: 0
	},
	span: {
		opacity: '0.87',
		marginLeft: theme.spacing(0.5)
	},
	title: {
		marginBottom: theme.spacing(2)
	},
	actions: {
		justifyContent: 'flex-end',
		padding: theme.spacing(2)
	}
});

class SimpleCard extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const {
			id,
			openForm,
			updateFormType,
			setCurrentlyEditingId
		} = this.props;

		setCurrentlyEditingId(id);
		updateFormType('edit');
		openForm();
	}

	render() {
		const {
			id,
			title,
			timeToCook,
			portions,
			classes,
			profile
		} = this.props;

		const isAdmin = profile.role === 'admin';

		return (
			<Card className={classes.card}>
				<CardContent className={classes.content}>
					<Typography variant='h2' className={classes.title}>
						{title}
					</Typography>

					<Box display='flex' flexDirection='row' alignItems='center'>
						<Box display='flex' alignItems='center'>
							<IconTimer color='primary' fontSize='small' />

							<Typography
								component='span'
								className={classes.span}
							>
								{timeToCook} {timeToCookText}
							</Typography>
						</Box>

						<Box display='flex' alignItems='center' ml={2}>
							<IconRestaurant color='primary' fontSize='small' />

							<Typography
								component='span'
								className={classes.span}
							>
								{portions} {portionsText}
							</Typography>
						</Box>
					</Box>
				</CardContent>

				<CardActions className={classes.actions}>
					{isAdmin && (
						<Button color='primary' onClick={this.handleClick}>
							{buttonEditText}
						</Button>
					)}

					<Button
						color='primary'
						component={Link}
						to={`/recipe-${id}`}
					>
						{buttonViewText}
					</Button>
				</CardActions>
			</Card>
		);
	}
}

SimpleCard.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	timeToCook: PropTypes.string,
	portions: PropTypes.string,
	ingredients: PropTypes.string,
	instructions: PropTypes.string,
	classes: PropTypes.object,
	openForm: PropTypes.func,
	updateFormType: PropTypes.func,
	setCurrentlyEditingId: PropTypes.func,
	profile: PropTypes.object
};

const mapStateToProps = state => ({
	profile: getProfile(state)
});

const mapDispatchToProps = {
	openForm,
	updateFormType,
	setCurrentlyEditingId
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(SimpleCard));
