import { combineReducers } from 'redux';
import { collectionsReducer } from './collections/reducers';

export const rootReducer = combineReducers({
	collections: collectionsReducer
});
