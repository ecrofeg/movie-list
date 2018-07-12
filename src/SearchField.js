import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Search } from 'semantic-ui-react';
import { addMovie } from './store/collections/actions';
import { searchMovies } from './store/results/actions';

class SearchExampleStandard extends Component {
	timeout = null;

	constructor(props) {
		super(props);

		this.state = {
			value: ''
		};
	}

	handleResultSelect = (e, { result }) => {
		this.setState({ value: '' });
		this.props.addMovie(result);
	};

	handleSearchChange = (e, { value }) => {
		this.setState({ value });

		if (value && value.length > 2) {
			clearTimeout(this.timeout);

			this.timeout = setTimeout(() => {
				this.props.searchMovies(value);
			}, 200);
		}
	};

	handleFocus = e => {
		e.target.select();
	};

	renderResult(props) {
		return <div className="app-search-results-item">
			<div className="app-search-results-item__poster">
				<img src={props.poster} alt={props.title}/>
				<div className="app-search-results-item__poster-placeholder"/>
			</div>

			<div className="app-search-results-item__info">
				<h4 className="app-search-results-item__info-title">{`${props.title} (${props.year})`}</h4>

				<div className="app-search-results-item__info-stars">
					{props.stars.map((name, index) => {
						return <React.Fragment key={index}>
							<span className="app-search-results-item__info-stars__name">{name}</span>
							{index < props.stars.length - 1 ? ', ' : ''}
						</React.Fragment>;
					})}
				</div>
			</div>
		</div>
	}

	render() {
		const { value } = this.state;

		return (
			<Search
				className="app-search-field"
				loading={this.props.isLoading}
				onResultSelect={this.handleResultSelect}
				onSearchChange={this.handleSearchChange}
				onFocus={this.handleFocus}
				results={this.props.results}
				value={value}
				spellCheck={false}
				placeholder="Enter movie name..."
				resultRenderer={this.renderResult}
			/>
		)
	}
}

export default connect(state => ({
	isLoading: state.isLoading,
	results: state.results
}), { addMovie, searchMovies })(SearchExampleStandard);
