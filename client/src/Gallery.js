import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Gallery.scss';

class Gallery extends Component {
	state = {
		top: [],
		photos: []
	}

	componentDidMount() {
		this.getTopRated();
		this.getPhotos();
	}

	getTopRated = () => {
		const url = (process.env.NODE_ENV === 'production') 
		? 'https://quiet-chamber-88821.herokuapp.com/top_rated'
		: 'http://localhost:5000/top_rated';

		fetch(url)
		.then(res => res.json())
		.then(res => this.setState({ top: res.data }))
		.catch(err => console.error(err));
	}

	getPhotos = () => {
		const api = process.env.PUMPKIN_PHOTO_API || 'http://localhost:5000/photos';

		fetch(api)
			.then(res => res.json())
			.then(res => this.setState({ photos: res.data }))
			.catch(err => console.error(err));
	}

	render() {
		const { top, photos } = this.state;
		return (
			<React.Fragment>
				<h2>Top Rated</h2>
				<div className="content">
					{top.map(({image_id, image_file, name, year, rating}) => 
						<Link to={`/${year}`} className="pumpkin-gallery" key={image_id}>
						<h2 className="pumpkin-gallery__overlay pumpkin-gallery__year">{year}</h2>
						<h3 className="pumpkin-gallery__rating">Likes: {rating}</h3>
						<img className="pumpkin-gallery__thumb" src={'images/' + image_file} width="300" alt={name} />
						<img className="placeholder" src="images/spin.svg" alt="Loading"/>
						</Link>
					)}
				</div>
				<h2>Gallery</h2>
				<div className="content">
					{photos.map(({gallery_id, image_file, name, year}) => 
						<Link to={`/${year}`} className="pumpkin-gallery" key={gallery_id}>
							<h2 className="pumpkin-gallery__overlay pumpkin-gallery__year">{year}</h2>
							<img className="pumpkin-gallery__thumb" src={'images/' + image_file} width="300" alt={name} />
							<img className="placeholder" src="images/spin.svg" alt="Loading"/>
						</Link>
					)}
				</div>
			</React.Fragment>
		);
	}
}

export default Gallery;
