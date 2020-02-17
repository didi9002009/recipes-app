import React from 'react';
import PropTypes from 'prop-types';

import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';

import AddForm from '../AddForm';

const styles = theme => ({
	fab: {
		position: 'fixed',
		right: theme.spacing(2),
		bottom: theme.spacing(4),
		zIndex: 10
	},
	form: {
		width: theme.spacing(40)
	}
});

class AddRecipe extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isFormOpened: false
		};

		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleOpen() {
		this.setState({
			isFormOpened: true
		});
	}

	handleClose() {
		this.setState({
			isFormOpened: false
		});
	}

	render() {
		const { classes } = this.props;
		const { isFormOpened } = this.state;

		return (
			<React.Fragment>
				<Fab
					color='primary'
					className={classes.fab}
					onClick={this.handleOpen}
				>
					<AddIcon />
				</Fab>

				<Drawer
					anchor='right'
					open={isFormOpened}
					onClose={this.handleClose}
					className={classes.sidebar}
				>
					<Box className={classes.form}>
						<AddForm handleClose={this.handleClose} />
					</Box>
				</Drawer>
			</React.Fragment>
		);
	}
}

AddRecipe.propTypes = {
	classes: PropTypes.object
};

export default withStyles(styles)(AddRecipe);
