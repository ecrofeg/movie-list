import React from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Image } from 'semantic-ui-react';
import classnames from 'classnames';

class Movies extends React.Component {
	render() {
		return <div className="app-movies">
			{this.props.movies.map((movie, index) => (
				<Card className="app-movies-card" key={index}>
					<Image src={movie.poster}/>

					<Card.Content>
						<Card.Header className="app-movies-card__title">{movie.title}</Card.Header>

						<Card.Meta>
							<span className="date">{movie.year}</span>
						</Card.Meta>
					</Card.Content>

					<Card.Content className={classnames('app-movies-card__bottom', {
						'app-movies-card__bottom_liked': movie.isLiked,
						'app-movies-card__bottom_disliked': !movie.isLiked
					})} extra>
						{movie.isLiked ? (
							<React.Fragment>
								<Icon name="thumbs up"/>
								You liked it
							</React.Fragment>
						) : (
							<React.Fragment>
								<Icon name="thumbs down"/>
								You disliked it
							</React.Fragment>
						)}

					</Card.Content>
				</Card>
			))}
		</div>;
	}
}

export default connect(
	state => {
		return {
			movies: state.collections[0].movies
		};
	}
)(Movies);
