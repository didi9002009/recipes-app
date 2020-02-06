import React from 'react';
import { Link } from 'react-router-dom';

import { notFoundTitle, notFoundLink } from './constants';
import { homeUrl } from '../Login/constants';

const NotFound = () => (
	<div className='not-found'>
		<div className='not-found__content'>
			<h1>{notFoundTitle}</h1>

			<Link to={homeUrl}>{notFoundLink}</Link>
		</div>
	</div>
);

export default NotFound;
