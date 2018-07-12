import { combineReducers } from 'redux';
import { collectionsReducer } from './collections/reducers';
import { resultsReducer } from './results/reducers';
import { isLoadingReducer } from './isLoading/reducers';

export const rootReducer = combineReducers({
	collections: collectionsReducer,
	results: resultsReducer,
	isLoading: isLoadingReducer
});
