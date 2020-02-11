import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { headerTitle } from './constants';
import { logOut } from './actions';
import ThemeSwitcher from '../ThemeSwitcher';
import Search from '../Search';

import { openSearch, closeSearch } from '../Search/actions';

const useStyles = makeStyles(theme => ({
	bar: {
		borderTopWidth: theme.spacing(2),
		borderTopStyle: 'solid',
		borderTopColor: theme.palette.primary.dark
	},
	title: {
		flexGrow: 1
	},
	icon: {
		padding: theme.spacing(1)
	}
}));

const Header = ({ logOut, openSearch }) => {
	const classes = useStyles();

	return (
		<AppBar position='fixed' className={classes.bar}>
			<Toolbar>
				<Typography variant='h1' className={classes.title}>
					{headerTitle}
				</Typography>

				<Box display='flex' alignItems='center'>
					<IconButton
						color='inherit'
						className={classes.icon}
						onClick={openSearch}
					>
						<SearchIcon />
					</IconButton>

					<Search />

					<ThemeSwitcher />

					<IconButton
						color='inherit'
						onClick={logOut}
						className={classes.icon}
					>
						<ExitToAppIcon />
					</IconButton>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

Header.propTypes = {
	logOut: PropTypes.func,
	openSearch: PropTypes.func
};

const mapDispatchToProps = {
	logOut,
	openSearch,
	closeSearch
};

export default connect(null, mapDispatchToProps)(Header);
