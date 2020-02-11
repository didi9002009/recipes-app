import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { headerTitle } from './constants';
import ThemeSwitcher from '../ThemeSwitcher';
import { logOut } from './actions';

const useStyles = makeStyles(theme => ({
	bar: {
		borderTopWidth: theme.spacing(2),
		borderTopStyle: 'solid',
		borderTopColor: theme.palette.primary.dark
	},
	title: {
		flexGrow: 1
	}
}));

const Header = ({ logOut }) => {
	const classes = useStyles();

	return (
		<AppBar position='fixed' className={classes.bar}>
			<Toolbar>
				<Typography variant='h1' className={classes.title}>
					{headerTitle}
				</Typography>

				<Box display='flex' alignItems='center'>
					<IconButton size='small' color='inherit' onClick={logOut}>
						<PowerSettingsNewIcon />
					</IconButton>

					<ThemeSwitcher />
				</Box>
			</Toolbar>
		</AppBar>
	);
};

Header.propTypes = {
	logOut: PropTypes.func
};

const mapDispatchToProps = {
	logOut
};

export default connect(null, mapDispatchToProps)(Header);
