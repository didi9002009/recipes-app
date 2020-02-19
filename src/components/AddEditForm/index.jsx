import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import { firestoreConnect } from 'react-redux-firebase';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import IconArrowBack from '@material-ui/icons/ArrowBack';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { form } from './constants';
import { closeForm } from '../AddEditRecipe/actions';
import { getFormType, getCurrentlyEditing, getRecipes } from '../App/selectors';

const styles = theme => ({
	head: {
		display: 'flex',
		alignItems: 'center',
		minHeight: theme.spacing(10),
		padding: theme.spacing(2, 2, 2, 7),
		borderTopWidth: theme.spacing(2),
		borderTopStyle: 'solid',
		borderTopColor: theme.palette.primary.dark,
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
		position: 'relative'
	},
	headIcon: {
		position: 'absolute',
		left: theme.spacing(0.5),
		top: theme.spacing(1),
		color: 'inherit'
	},
	form: {
		padding: theme.spacing(2)
	},
	formRow: {
		marginBottom: theme.spacing(2)
	},
	button: {
		padding: theme.spacing(2, 3, 2, 4),
		fontSize: theme.spacing(1.75),
		fontWeight: 700
	},
	helperText: {
		fontSize: 12
	}
});

class AddEditForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			formData: {}
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			formData: {
				...this.state.formData,
				[e.target.id]: e.target.value
			}
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		const { formData } = this.state;
		const { firestore, closeForm, formType, currentlyEditing } = this.props;

		if (formType === 'add') {
			// Add recipe to database
			firestore.add('recipes', {
				...formData,
				timestamp: firebase.firestore.FieldValue.serverTimestamp()
			});
		} else {
			// Update recipe
			firestore.update(
				{ collection: 'recipes', doc: currentlyEditing },
				{
					...formData
				}
			);
		}

		// Reset form state
		this.setState({
			formData: {}
		});

		// Close Drawer component
		closeForm();
	}

	componentDidMount() {
		const { recipes, currentlyEditing } = this.props;
		const currentRecipe = recipes.find(
			recipe => recipe.id === currentlyEditing
		);

		if (currentRecipe) {
			this.setState({
				formData: {
					...this.state.formData,
					title: currentRecipe.title,
					timeToCook: currentRecipe.timeToCook,
					portions: currentRecipe.portions,
					ingredients: currentRecipe.ingredients,
					instructions: currentRecipe.instructions
				}
			});
		}
	}

	render() {
		const {
			classes,
			closeForm,
			formType,
			recipes,
			currentlyEditing
		} = this.props;
		const { formData } = this.state;

		const currentRecipe = recipes.find(
			recipe => recipe.id === currentlyEditing
		);

		return (
			<React.Fragment>
				<Paper square={true} elevation={5} className={classes.head}>
					<Box>
						<IconButton
							className={classes.headIcon}
							onClick={closeForm}
						>
							<IconArrowBack />
						</IconButton>

						<Typography
							variant='h1'
							component='h2'
							className={classes.headTitle}
						>
							{formType === 'add'
								? form.titleAdd
								: form.titleEdit}
						</Typography>
					</Box>
				</Paper>

				<Box>
					<form
						noValidate
						autoComplete='off'
						className={classes.form}
						onSubmit={this.handleSubmit}
					>
						{form.fields.map(
							(
								{ id, label, multiline, helperText = null },
								index
							) => (
								<FormGroup key={id} className={classes.formRow}>
									<TextField
										id={id}
										label={label}
										variant='filled'
										onChange={this.handleChange}
										multiline={multiline}
										rows={multiline ? 3 : null}
										helperText={helperText}
										required
										autoFocus={
											index === 0 && formType === 'add'
												? true
												: false
										}
										FormHelperTextProps={{
											className: classes.helperText
										}}
										defaultValue={
											currentRecipe && currentRecipe[id]
										}
									/>
								</FormGroup>
							)
						)}

						<Box textAlign='right'>
							<Button
								variant='contained'
								color='primary'
								size='large'
								type='submit'
								className={classes.button}
								disabled={
									Object.keys(formData).length !== 5 ||
									Object.values(formData).includes('')
										? true
										: false
								}
							>
								{formType === 'add'
									? form.buttonAdd
									: form.buttonEdit}
							</Button>
						</Box>
					</form>
				</Box>
			</React.Fragment>
		);
	}
}

AddEditForm.propTypes = {
	classes: PropTypes.object,
	firestore: PropTypes.object,
	closeForm: PropTypes.func,
	formType: PropTypes.string,
	currentlyEditing: PropTypes.string,
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
	formType: getFormType(state),
	currentlyEditing: getCurrentlyEditing(state),
	recipes: getRecipes(state)
});

const mapDispatchToProps = {
	closeForm
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(firestoreConnect()(withStyles(styles)(AddEditForm)));
