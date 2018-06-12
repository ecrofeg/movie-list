import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Search } from 'semantic-ui-react';
import { addMovie } from './store/collections/actions';

const source = [
	{
		title: 'Solo: A Star Wars Story',
		year: '2018',
		poster: 'https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
		stars: [
			'Alden Ehrenreich',
			'Woody Harrelson',
			'Emilia Clarke'
		]
	},
	{
		title: 'It',
		year: '2017',
		poster: 'https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
		stars: [
			'Bill Skarsgård',
			'Jaeden Lieberher',
			'Finn Wolfhard'
		]
	},
	{
		title: 'Thor: Ragnarok',
		year: '2017',
		poster: 'https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
		stars: [
			'Chris Hemsworth',
			'Tom Hiddleston',
			'Cate Blanchett'
		]
	}
];

class SearchExampleStandard extends Component {
	componentWillMount() {
		this.resetComponent();
	}

	resetComponent = () => this.setState({ isLoading: false, results: [], value: '' });

	handleResultSelect = (e, { result }) => {
		this.setState({ value: '' });
		this.props.addMovie(result);
	};

	handleSearchChange = (e, { value }) => {
		this.setState({ isLoading: true, value });

		setTimeout(() => {
			if (this.state.value.length < 1) {
				return this.resetComponent();
			}

			const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
			const isMatch = result => re.test(result.title);

			this.setState({
				isLoading: false,
				results: _.filter(source, isMatch)
			});
		}, 300);
	};

	handleFocus = e => {
		e.target.select();
	};

	renderResult(props) {
		return <div className="app-search-results-item">
			<div className="app-search-results-item__poster">
				<img src={props.poster} alt={props.title}/>
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
		const { isLoading, value, results } = this.state;

		return (
			<Search
				className="app-search-field"
				loading={isLoading}
				onResultSelect={this.handleResultSelect}
				onSearchChange={_.debounce(this.handleSearchChange, 300, { leading: true })}
				onFocus={this.handleFocus}
				results={results}
				value={value}
				resultRenderer={this.renderResult}
			/>
		)
	}
}

export default connect(null, { addMovie })(SearchExampleStandard);
