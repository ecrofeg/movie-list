import React, { Component } from 'react';
import SearchField from './SearchField';

class App extends Component {
	render() {
		return (
			<div className="app">
				<h1 className="app-title">My Movie List</h1>

				<div className="app-search">
					<SearchField/>
				</div>
			</div>
		);
	}
}

export default App;
