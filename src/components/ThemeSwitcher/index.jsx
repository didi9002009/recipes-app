import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getAppTheme } from '../App/selectors';
import { setThemeDark, setThemeLight } from '../App/actions';

class ThemeSwitcher extends React.Component {
	constructor(props) {
		super(props);

		this.setTheme = this.setTheme.bind(this);
	}

	setTheme() {
		const { isDarkTheme, setThemeDark, setThemeLight } = this.props;

		isDarkTheme ? setThemeLight() : setThemeDark();
	}

	render() {
		return (
			<button className='theme-switcher' onClick={this.setTheme}>
				<i className='material-icons material-icons--dark'>
					brightness_7
				</i>

				<i className='material-icons material-icons--light'>
					brightness_4
				</i>
			</button>
		);
	}
}

ThemeSwitcher.propTypes = {
	isDarkTheme: PropTypes.bool,
	setThemeDark: PropTypes.func,
	setThemeLight: PropTypes.func
};

const mapStateToProps = state => ({
	isDarkTheme: getAppTheme(state)
});

const mapDispatchToProps = {
	setThemeDark,
	setThemeLight
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);
