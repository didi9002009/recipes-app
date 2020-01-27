import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Import reducers

/* Combine reducers
 *
 * reducerKey: reducerValue
 *
 */
const rootReducer = combineReducers({});

const composeEnchancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnchancers(applyMiddleware(thunk))
);

export default store;
