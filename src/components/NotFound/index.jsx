import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getAppTheme } from '../App/selectors';

import { notFoundTitle, notFoundLink } from './constants';

class NotFound extends React.Component {
	render() {
		const { isDarkTheme } = this.props;

		return (
			<div
				className={classNames(
					'not-found',
					{ 'not-found--theme-dark': isDarkTheme },
					{ 'not-found--theme-light': !isDarkTheme }
				)}
			>
				<div className='not-found__content'>
					<h1>{notFoundTitle}</h1>

					<Link to='/'>{notFoundLink}</Link>
				</div>
			</div>
		);
	}
}

NotFound.propTypes = {
	isDarkTheme: PropTypes.bool
};

const mapStateToProps = state => ({
	isDarkTheme: getAppTheme(state)
});

export default connect(mapStateToProps)(NotFound);
