import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { authenticate } from './actions';

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

		const { authenticate, history } = this.props;
		const credentials = {
			email: this.state.email,
			password: this.state.password
		};

		authenticate(credentials, history);
	}

	render() {
		return (
			<div className='login'>
				<form onSubmit={this.authenticate}>
					<div className='form__row'>
						<input
							type='email'
							name='email'
							id='email'
							onChange={this.handleChange}
						/>

						<label htmlFor='email'>Имейл</label>
					</div>

					<div className='form__row'>
						<input
							type='password'
							name='password'
							id='password'
							onChange={this.handleChange}
						/>

						<label htmlFor='password'>Парола</label>
					</div>

					<div className='form__row'>
						<button type='submit' className='button'>
							Влез
						</button>
					</div>
				</form>
			</div>
		);
	}
}

Login.propTypes = {
	authenticate: PropTypes.func,
	history: PropTypes.object
};

const mapDispatchToProps = {
	authenticate
};

export default connect(null, mapDispatchToProps)(withRouter(Login));
