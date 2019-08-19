import React from 'react';
import './PhotoCollectionPage.scss';

class PhotoCollectionPage extends React.Component {
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
		const url = (process.env.NODE_ENV === 'production') 
		? `https://quiet-chamber-88821.herokuapp.com/photos/${year}`
		: `http://localhost:5000/photos/${year}`;

		fetch(url)
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
		this.setState({ 
			selectedImage: image_file, 
			selectedImageName: name 
		});
	}

	render() {
		const { photos, year, selectedImage, selectedImageName } = this.state;
		return (
			<React.Fragment>
				<h2>{year}</h2>
				<div className="pumpkin-collection">
					<div className="pumpkin-collection__photos">
						{photos.map(({image_id, image_file, name, rating}) => 
							<div className="pumpkin-collection__photo-item" key={image_id} onClick={() => this.handleClick(image_file, name)}>
								<img src={`images/${image_file}`} alt={name} width="200" />
								<p>{rating ? `Rating: ${rating}` : ''}</p>
							</div>
						)}
					</div>
					<div className="pumpkin-collection__main-photo">
						<p>{selectedImageName}</p>
						<img src={`images/${selectedImage}`} alt={selectedImageName} style={{'maxWidth': '50%'}}/>
					</div>
				</div>	
			</React.Fragment>	
		);
	}
}

export default PhotoCollectionPage;
