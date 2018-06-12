export const ADD_MOVIE = 'ADD_MOVIE';

export const addMovie = movie => {
	return {
		type: ADD_MOVIE,
		payload: movie
	};
};
