import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isLoaded, isEmpty } from 'react-redux-firebase';

import { authenticate } from './actions';
import { loginForm, homeUrl } from './constants';
import { getAuth, getProfile } from '../App/selectors';

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
		const { auth, profile } = this.props;

		return isLoaded(profile) ? (
			isEmpty(auth) ? (
				<div className='login'>
					<form onSubmit={this.authenticate}>
						<div className='form__row'>
							<input
								type='email'
								name='email'
								id='email'
								onChange={this.handleChange}
							/>

							<label htmlFor='email'>
								{loginForm.emailLabel}
							</label>
						</div>

						<div className='form__row'>
							<input
								type='password'
								name='password'
								id='password'
								onChange={this.handleChange}
							/>

							<label htmlFor='password'>
								{loginForm.passwordLabel}
							</label>
						</div>

						<div className='form__row'>
							<button type='submit' className='button'>
								{loginForm.submitButtonLabel}
							</button>
						</div>
					</form>
				</div>
			) : (
				<Redirect to={homeUrl} />
			)
		) : null;
	}
}

Login.propTypes = {
	authenticate: PropTypes.func,
	auth: PropTypes.object,
	profile: PropTypes.object
};

const mapStateToProps = state => ({
	auth: getAuth(state),
	profile: getProfile(state)
});

const mapDispatchToProps = {
	authenticate
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
