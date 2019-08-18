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
		fetch('http://localhost:5000/photos')
			.then(res => res.json())
			.then(res => this.setState({ photos: res.data }))
			.catch(err => console.error(err));
	}

	render() {
		const { photos } = this.state;
		return (
			<div className="pumpkins">
				<h1>Pumpkins</h1>
				<img className="pumpkin-logo" src="images/jack-o-lantern.png" alt="Pumpkins"/>
				<div className="row">
				{photos.map(({gallery_id, image_file, name, year}) => 
					<Link to={`/${year}`} className="pumpkin-col" key={gallery_id}>
						<h2 className="pumpkin-year">{year}</h2>
						<img className="pumpkin-image" src={'images/' + image_file} width="300" alt={name} />
					</Link>
				)}
				</div>
			</div>
		);
	}
}

export default Gallery;
