import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getAppTheme } from './selectors';
import { setThemeDark } from './actions';

import Header from '../Header';
import Footer from '../Footer';

class App extends React.Component {
	componentDidMount() {
		const { setThemeDark } = this.props;

		setThemeDark();
	}

	render() {
		const { isDarkTheme } = this.props;

		return (
			<div
				className={classNames(
					'app',
					{ 'app--theme-dark': isDarkTheme },
					{ 'app--theme-light': !isDarkTheme }
				)}
			>
				<Header />
				<Footer />
			</div>
		);
	}
}

App.propTypes = {
	setThemeDark: PropTypes.func,
	isDarkTheme: PropTypes.bool
};

const mapStateToProps = state => ({
	isDarkTheme: getAppTheme(state)
});

const mapDispatchToProps = {
	setThemeDark
};

export default compose(
	firestoreConnect(() => ['recipes']),
	connect(mapStateToProps, mapDispatchToProps)
)(App);
