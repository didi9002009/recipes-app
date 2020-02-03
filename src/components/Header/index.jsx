import React from 'react';

import { headerTitle } from './constants';
import ThemeSwitcher from '../ThemeSwitcher';

const Header = () => (
	<header className='header'>
		<div className='container'>
			<div className='header__content'>
				<h1>{headerTitle}</h1>

				<div className='header__actions'>
					<ThemeSwitcher />
				</div>
			</div>
		</div>
	</header>
);

export default Header;
