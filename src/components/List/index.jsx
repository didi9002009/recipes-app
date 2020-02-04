import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getRecipes } from '../App/selectors';

import Card from '../Card';

class List extends React.Component {
	render() {
		const { recipes } = this.props;

		return recipes ? (
			<div className='list'>
				<div className='container'>
					<div className='list__content'>
						{recipes.map(recipe => (
							<Card key={recipe.id} {...recipe} />
						))}
					</div>
				</div>
			</div>
		) : null;
	}
}

List.propTypes = {
	recipes: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			timeToCook: PropTypes.number,
			portions: PropTypes.number,
			ingredients: PropTypes.string,
			instructions: PropTypes.string
		})
	)
};

const mapStateToProps = state => ({
	recipes: getRecipes(state)
});

export default connect(mapStateToProps)(List);
