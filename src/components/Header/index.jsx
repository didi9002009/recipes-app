import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { headerTitle } from './constants';
import ThemeSwitcher from '../ThemeSwitcher';

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

const Header = () => {
	const classes = useStyles();

	return (
		<AppBar position='fixed' className={classes.bar}>
			<Toolbar>
				<Typography variant='h1' className={classes.title}>
					{headerTitle}
				</Typography>

				<ThemeSwitcher />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
