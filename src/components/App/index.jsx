import React from 'react';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../Header';
import List from '../List';
import Footer from '../Footer';

const useStyles = makeStyles(theme => ({
	app: {
		display: 'flex',
		flexFlow: 'column',
		minHeight: '100%',
		paddingTop: theme.spacing(10),
		position: 'relative'
	}
}));

const App = () => {
	const classes = useStyles();

	return (
		<Box className={classes.app}>
			<Header />
			<List />
			<Footer />
		</Box>
	);
};

export default App;
