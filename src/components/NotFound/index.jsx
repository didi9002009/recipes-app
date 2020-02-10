import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { notFoundTitle, notFoundLink } from './constants';
import { homeUrl } from '../Login/constants';

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%'
	},
	title: {
		marginBottom: theme.spacing(2)
	}
}));

const NotFound = () => {
	const classes = useStyles();

	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			className={classes.root}
		>
			<Typography variant='h1' className={classes.title}>
				{notFoundTitle}
			</Typography>

			<Button color='primary' size='small' component={Link} to={homeUrl}>
				{notFoundLink}
			</Button>
		</Box>
	);
};

export default NotFound;
