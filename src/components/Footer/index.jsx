import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { footerCopyright } from './constants';

const useStyles = makeStyles(theme => ({
	footer: {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(2)
	},
	text: {
		fontSize: 14
	}
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<Paper
			className={classes.footer}
			square={true}
			elevation={0}
			component='footer'
		>
			<Container>
				<Typography className={classes.text}>
					{footerCopyright}
				</Typography>
			</Container>
		</Paper>
		// <footer className='footer'>
		// 	<div className='container'>
		// 		<div className='footer__content'>
		// 			<p className='copyright'>{footerCopyright}</p>
		// 		</div>
		// 	</div>
		// </footer>
	);
};

export default Footer;
