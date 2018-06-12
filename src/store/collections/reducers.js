import { ADD_MOVIE } from './actions';

const initialState = [
	{
		id: 0,
		movies: []
	}
];

export const collectionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MOVIE:
			const newState = [ ...state  ];

			newState[0].movies = [ ...newState[0].movies, action.payload ];

			return newState;

		default:
			return state;
	}
};
