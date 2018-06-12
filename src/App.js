import React, { Component } from 'react';
import SearchField from './SearchField';
import Movies from './Movies';

class App extends Component {
	render() {
		return (
			<div className="app">
				<h1 className="app-title">My Movie List</h1>

				<div className="app-search">
					<SearchField/>
				</div>

				<Movies/>
			</div>
		);
	}
}

export default App;
