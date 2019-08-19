import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Gallery.scss';

class Gallery extends Component {
	state = {
		photos: []
	}

	componentDidMount() {
		this.getPhotos();
	}

	getPhotos = () => {
		const url = (process.env.NODE_ENV === 'production') 
		? 'https://quiet-chamber-88821.herokuapp.com/photos'
		: 'http://localhost:5000/photos';

		fetch(url)
			.then(res => res.json())
			.then(res => this.setState({ photos: res.data }))
			.catch(err => console.error(err));
	}

	render() {
		const { photos } = this.state;
		return (
			<div className="content">
			{photos.map(({gallery_id, image_file, name, year}) => 
				<Link to={`/${year}`} className="pumpkin-gallery" key={gallery_id}>
					<h2 className="pumpkin-gallery__overlay pumpkin-gallery__year">{year}</h2>
					<img className="pumpkin-gallery__thumb" src={'images/' + image_file} width="300" alt={name} />
					<img className="placeholder" src="images/spin.svg" alt="Loading Image"/>
				</Link>
			)}
			</div>
		);
	}
}

export default Gallery;
