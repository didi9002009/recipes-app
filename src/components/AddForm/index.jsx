import React from 'react';
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

class AddForm extends React.Component {
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
		const { firestore, handleClose } = this.props;

		// Add recipe to database
		firestore.add('recipes', {
			...formData,
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		});

		// Reset form state
		this.setState({
			formData: {}
		});

		// Close Drawer component
		handleClose();
	}

	render() {
		const { classes, handleClose } = this.props;
		const { formData } = this.state;

		return (
			<React.Fragment>
				<Paper square={true} elevation={5} className={classes.head}>
					<Box>
						<IconButton
							className={classes.headIcon}
							onClick={handleClose}
						>
							<IconArrowBack />
						</IconButton>

						<Typography
							variant='h1'
							component='h2'
							className={classes.headTitle}
						>
							{form.title}
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
										autoFocus={index === 0 ? true : false}
										FormHelperTextProps={{
											className: classes.helperText
										}}
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
								{form.button}
							</Button>
						</Box>
					</form>
				</Box>
			</React.Fragment>
		);
	}
}

AddForm.propTypes = {
	classes: PropTypes.object,
	handleClose: PropTypes.func,
	firestore: PropTypes.object
};

export default firestoreConnect()(withStyles(styles)(AddForm));