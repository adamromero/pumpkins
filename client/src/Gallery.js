import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazyload';
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
		const api = process.env.NODE_ENV === "production" ? process.env.PUMPKIN_PHOTO_API : `http://localhost:5000`;

		fetch(`${api}/top_rated`)
		.then(res => res.json())
		.then(res => this.setState({ top: res.data }))
		.catch(err => console.error(err));
	}

	getPhotos = () => {
		const api = process.env.NODE_ENV === "production" ? process.env.PUMPKIN_PHOTO_API : `http://localhost:5000`;

		fetch(`${api}/photos`)
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
						<LazyLoad throttle={500}>
							<img className="pumpkin-gallery__thumb" src={'images/' + image_file} width="300" alt={name} />
						</LazyLoad>
						<img className="placeholder" src="images/spin.svg" alt="Loading"/>
						</Link>
					)}
				</div>
				<h2>Gallery</h2>
				<div className="content">
					{photos.map(({gallery_id, image_file, name, year}) => 
						<Link to={`/${year}`} className="pumpkin-gallery" key={gallery_id}>
						<h2 className="pumpkin-gallery__overlay pumpkin-gallery__year">{year}</h2>
						<LazyLoad throttle={500}>
							<img className="pumpkin-gallery__thumb" src={'images/' + image_file} width="300" alt={name} />
						</LazyLoad>
						<img className="placeholder" src="images/spin.svg" alt="Loading"/>
						</Link>
					)}
				</div>
			</React.Fragment>
		);
	}
}

export default Gallery;
