import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
	render() {
		const { title, timeToCook, portions } = this.props;

		return (
			<div className='card'>
				<div className='card__content'>
					<h2 className='card__title'>{title}</h2>

					<ul className='card__meta'>
						<li>
							<i className='material-icons'>timer</i>

							<span>{timeToCook} мин.</span>
						</li>

						<li>
							<i className='material-icons'>restaurant</i>

							<span>{portions} порции</span>
						</li>
					</ul>

					<div className='card__actions'>
						<span>Виж още</span>
					</div>
				</div>
			</div>
		);
	}
}

Card.propTypes = {
	title: PropTypes.string,
	timeToCook: PropTypes.number,
	portions: PropTypes.number,
	ingredients: PropTypes.string,
	instructions: PropTypes.string
};

export default Card;
