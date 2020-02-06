import React from 'react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import Header from '../Header';
import List from '../List';
import Footer from '../Footer';

const App = () => (
	<div className='app'>
		<Header />
		<List />
		<Footer />
	</div>
);

export default compose(firestoreConnect(() => ['recipes']))(App);
