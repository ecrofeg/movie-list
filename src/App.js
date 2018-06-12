import React, { Component } from 'react';
import SearchField from './SearchField';

class App extends Component {
	render() {
		return (
			<div className="movie-list">
				<SearchField/>
			</div>
		);
	}
}

export default App;
