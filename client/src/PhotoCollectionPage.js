import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import './PhotoCollectionPage.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class PhotoCollectionPage extends Component {
	state = {
		photos: [],
		year: null,
		selectedImage: '',
		selectedImageName: ''
	}
	componentDidMount() {
		const year = this.props.location.pathname.replace("/", "");
		this.getPhotos(year);
	}

	getPhotos = (year) => {
		const api = process.env.NODE_ENV === "production" ? 'https://quiet-chamber-88821.herokuapp.com' : 'http://localhost:5000';

		fetch(`${api}/photos/${year}`)
			.then(res => res.json())
			.then(res => {
				this.setState({ 
					photos: res.data,
					year: year,
					selectedImage: res.data[0].image_file,
					selectedImageName: res.data[0].name
				 })
			})
			.catch(err => console.error(err));
	}

	handleClick = (image_file, name) => {
		/*
		this.setState({ 
			selectedImage: image_file, 
			selectedImageName: name 
		});*/
		console.log(name + ' clicked');
	}

	render() {
		const { photos, year, selectedImage, selectedImageName } = this.state;
		return (
			<React.Fragment>
				<h2>{year}</h2>
				<div className="pumpkin-collection">
					<div className="pumpkin-collection__photos">
						<Carousel autoPlay>
							{photos.map(({image_id, image_file, name, rating}) => 
								<div className="pumpkin-collection__photo-item" key={image_id} onClick={() => this.handleClick(image_file, name)}>
									<img src={`images/${image_file}`} alt={name} />
									<p>{rating ? `Likes: ${rating}` : ''}</p>
								</div>
							)}
						</Carousel>
					</div>
				</div>	
			</React.Fragment>	
		);
	}
}

export default PhotoCollectionPage;
