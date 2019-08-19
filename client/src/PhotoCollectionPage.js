import React from 'react';
import './PhotoCollectionPage.scss';

class PhotoCollectionPage extends React.Component {
	state = {
		photos: [],
		year: null,
		selectedImage: ''
	}
	componentDidMount() {
		const year = this.props.location.pathname.replace("/", "");
		//this.setState({ year: year });
		this.getPhotos(year);
		
	}

	getPhotos = (year) => {
		fetch(`http://localhost:5000/photos/${year}`)
			.then(res => res.json())
			.then(res => {
				this.setState({ 
					photos: res.data,
					year: year,
					selectedImage: res.data[0].image_file
				 })
			})
			.catch(err => console.error(err));
	}

	handleClick = (image_file) => {
		this.setState({ selectedImage: image_file });
	}

	render() {
		const { photos, year, selectedImage } = this.state;
		return (
			<React.Fragment>
				<h2>{year}</h2>
				<div className="pumpkin-collection">
					<div className="pumpkin-collection__photos">
						{photos.map(({image_id, image_file, name, rating}) => 
							<div className="pumpkin-collection__photo-item" key={image_id} onClick={() => this.handleClick(image_file)}>
								<img src={`images/${image_file}`} alt={name} width="200" />
								<p>{name}</p>
								<p>{rating ? `Rating: ${rating}` : ''}</p>
							</div>
						)}
					</div>
					<div className="pumpkin-collection__main-photo">
						<img src={`images/${selectedImage}`} alt="" style={{width: '100%'}}/>
					</div>
				</div>	
			</React.Fragment>	
		);
	}
}

export default PhotoCollectionPage;
