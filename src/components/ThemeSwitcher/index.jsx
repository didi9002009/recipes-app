import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Brightness4 from '@material-ui/icons/Brightness4';
import Brightness7 from '@material-ui/icons/Brightness7';

import { getAppTheme } from '../App/selectors';
import { setThemeDark, setThemeLight } from '../App/actions';

const styles = {
	btn: {
		fontSize: '1.5rem'
	}
};

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
		const { classes, isDarkTheme } = this.props;

		return (
			<IconButton
				className={classes.btn}
				onClick={this.setTheme}
				color='inherit'
				size='small'
			>
				{isDarkTheme ? (
					<Brightness7 fontSize='inherit' />
				) : (
					<Brightness4 fontSize='inherit' />
				)}
			</IconButton>
		);
	}
}

ThemeSwitcher.propTypes = {
	isDarkTheme: PropTypes.bool,
	setThemeDark: PropTypes.func,
	setThemeLight: PropTypes.func,
	classes: PropTypes.object
};

const mapStateToProps = state => ({
	isDarkTheme: getAppTheme(state)
});

const mapDispatchToProps = {
	setThemeDark,
	setThemeLight
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(ThemeSwitcher));
