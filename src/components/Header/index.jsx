import React from 'react';

import { headerTitle } from './constants';

const Header = () => (
	<header className='header'>
		<div className='container'>
			<div className='header__content'>
				<h1>{headerTitle}</h1>
			</div>
		</div>
	</header>
);

export default Header;
