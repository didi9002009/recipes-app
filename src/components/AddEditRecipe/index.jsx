import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import Drawer from '@material-ui/core/Drawer';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';

import AddEditForm from '../AddEditForm';
import { openForm, closeForm, updateFormType } from './actions';
import { getIsFormOpened } from '../App/selectors';

const styles = theme => ({
	fab: {
		position: 'fixed',
		right: theme.spacing(2),
		bottom: theme.spacing(2),
		zIndex: 10
	},
	form: {
		width: theme.spacing(40)
	},
	snackbar: {
		[theme.breakpoints.down('xs')]: {
			bottom: theme.spacing(11.25)
		}
	}
});

class AddEditRecipe extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			snackbar: {
				isOpen: false,
				message: ''
			}
		};

		this.handleOpen = this.handleOpen.bind(this);
		this.updateSnackbar = this.updateSnackbar.bind(this);
		this.closeSnackbar = this.closeSnackbar.bind(this);
	}

	handleOpen() {
		const { openForm, updateFormType } = this.props;

		openForm();
		updateFormType('add');
	}

	closeSnackbar() {
		this.setState({
			snackbar: {
				isOpen: false
			}
		});
	}

	updateSnackbar(openState, message) {
		this.setState({
			snackbar: {
				isOpen: openState,
				message
			}
		});
	}

	render() {
		const { classes, closeForm, isFormOpened } = this.props;
		const { snackbar } = this.state;

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
					onClose={closeForm}
					className={classes.sidebar}
				>
					<Box className={classes.form}>
						<AddEditForm updateSnackbar={this.updateSnackbar} />
					</Box>
				</Drawer>

				<Snackbar
					anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
					open={snackbar.isOpen}
					autoHideDuration={3000}
					message={snackbar.message}
					onClose={this.closeSnackbar}
					className={classes.snackbar}
				/>
			</React.Fragment>
		);
	}
}

AddEditRecipe.propTypes = {
	classes: PropTypes.object,
	openForm: PropTypes.func,
	closeForm: PropTypes.func,
	isFormOpened: PropTypes.bool,
	updateFormType: PropTypes.func
};

const mapStateToProps = state => ({
	isFormOpened: getIsFormOpened(state)
});

const mapDispatchToProps = {
	openForm,
	closeForm,
	updateFormType
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(AddEditRecipe));
