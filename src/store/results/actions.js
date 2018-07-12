import { startLoading, stopLoading } from '../isLoading/actions';

export const SET_RESULTS = 'SET_RESULTS';

export const resetSearch = () => {
	return dispatch => {
		dispatch(stopLoading());
		dispatch(setResults([]));
	};
};

export const searchMovies = searchText => {
	return async dispatch => {
		dispatch(startLoading());

		const apiURL = `${process.env.REACT_APP_API_URL}/api/v1/autocomplete/${encodeURIComponent(searchText)}`;

		const response = await fetch(apiURL);
		const results = await response.json();
		const movies = results.autocomplete_movie && results.autocomplete_movie.map(result => ({
			title: result.name ? result.name : '',
			year: result.release_year ? result.release_year : '',
			poster: result.image_url ? result.image_url : '',
			stars: result.actors ? result.actors : []
		}));

		dispatch(setResults(movies));
		dispatch(stopLoading());
	};
};

export const setResults = results => {
	return {
		type: SET_RESULTS,
		payload: results
	};
};
