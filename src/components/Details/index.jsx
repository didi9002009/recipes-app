import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getRecipes } from '../App/selectors';
import { appHomeUrl } from '../App/constants';
import {
	timeToCookText,
	portionsText,
	ingredientsTitle,
	instructionsTitle
} from './constants';

class Details extends React.Component {
	render() {
		const { match, recipes } = this.props;
		const recipe =
			recipes && recipes.find(recipe => recipe.id === match.params.id);

		return (
			<div className='details'>
				<div className='details__bar'></div>

				<div className='details__head'>
					<div className='container'>
						<div className='details__head-inner'>
							<Link to={appHomeUrl} className='details__back'>
								<i className='material-icons'>arrow_back</i>
							</Link>

							<h1 className='details__title'>{recipe.title}</h1>

							<ul className='details__meta'>
								<li>
									<i className='material-icons'>timer</i>

									<span>
										{recipe.timeToCook} {timeToCookText}
									</span>
								</li>

								<li>
									<i className='material-icons'>restaurant</i>

									<span>
										{recipe.portions} {portionsText}
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='details__body'>
					<div className='container'>
						<div className='details__body-inner'>
							<h3>{ingredientsTitle}</h3>

							<ul>
								{recipe.ingredients
									.split(',')
									.map(ingredient => (
										<li key={ingredient}>{ingredient}</li>
									))}
							</ul>

							<h3>{instructionsTitle}</h3>

							<p>{recipe.instructions}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Details.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string
		})
	}),
	recipes: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
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

export default connect(mapStateToProps)(Details);
