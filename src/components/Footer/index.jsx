import React from 'react';

import { footerCopyright } from './constants';

const Footer = () => (
	<footer className='footer'>
		<div className='container'>
			<div className='footer__content'>
				<p className='copyright'>{footerCopyright}</p>
			</div>
		</div>
	</footer>
);

export default Footer;
