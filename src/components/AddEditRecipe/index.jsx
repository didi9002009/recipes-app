import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';

import AddEditForm from '../AddEditForm';
import { openForm, closeForm, updateFormType } from './actions';
import { getIsFormOpened } from '../App/selectors';

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

class AddEditRecipe extends React.Component {
	constructor(props) {
		super(props);

		this.handleOpen = this.handleOpen.bind(this);
	}

	handleOpen() {
		const { openForm, updateFormType } = this.props;

		openForm();
		updateFormType('add');
	}

	render() {
		const { classes, closeForm, isFormOpened } = this.props;

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
						<AddEditForm />
					</Box>
				</Drawer>
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
