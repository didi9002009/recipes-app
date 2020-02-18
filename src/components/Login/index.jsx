import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isLoaded, isEmpty } from 'react-redux-firebase';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { authenticate } from './actions';
import { loginForm, homeUrl } from './constants';
import { getAuth, getProfile, getLoginStatus } from '../App/selectors';

const styles = theme => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%'
	},
	form: {
		maxWidth: 320,
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	formTitle: {
		marginBottom: theme.spacing(2)
	},
	formRow: {
		marginBottom: theme.spacing(3)
	}
});

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.authenticate = this.authenticate.bind(this);
		this.handleChange = this.handleChange.bind(this);

		this.state = {
			email: '',
			password: ''
		};
	}

	handleChange(e) {
		this.setState({
			[e.target.id]: e.target.value
		});
	}

	authenticate(event) {
		event.preventDefault();

		const { authenticate } = this.props;
		const { email, password } = this.state;

		const credentials = {
			email,
			password
		};

		authenticate(credentials);
	}

	render() {
		const { auth, profile, classes, loginFailed } = this.props;
		const errProps = {
			error: loginFailed ? true : false,
			helperText: loginFailed ? loginForm.еrrorText : null
		};

		return isLoaded(profile) ? (
			isEmpty(auth) ? (
				<Box className={classes.root}>
					<Container>
						<form
							onSubmit={this.authenticate}
							noValidate
							autoComplete='off'
							className={classes.form}
						>
							<Typography
								variant='h1'
								align='center'
								className={classes.formTitle}
							>
								{loginForm.formTitle}
							</Typography>

							<FormGroup className={classes.formRow}>
								<TextField
									id='email'
									type='email'
									label={loginForm.emailLabel}
									variant='filled'
									onChange={this.handleChange}
									required
									{...errProps}
								/>
							</FormGroup>

							<FormGroup className={classes.formRow}>
								<TextField
									id='password'
									type='password'
									label={loginForm.passwordLabel}
									variant='filled'
									onChange={this.handleChange}
									required
									{...errProps}
								/>
							</FormGroup>

							<FormGroup>
								<Button
									variant='contained'
									color='primary'
									size='large'
									type='submit'
								>
									{loginForm.submitButtonLabel}
								</Button>
							</FormGroup>
						</form>
					</Container>
				</Box>
			) : (
				<Redirect to={homeUrl} />
			)
		) : null;
	}
}

Login.propTypes = {
	authenticate: PropTypes.func,
	auth: PropTypes.object,
	profile: PropTypes.object,
	classes: PropTypes.object,
	loginFailed: PropTypes.bool
};

const mapStateToProps = state => ({
	auth: getAuth(state),
	profile: getProfile(state),
	loginFailed: getLoginStatus(state)
});

const mapDispatchToProps = {
	authenticate
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(Login));
