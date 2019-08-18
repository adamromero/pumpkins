import React from 'react';

class PhotoCollectionPage extends React.Component {
	state = {
		photos: [],
		year: null
	}
	componentDidMount() {
		const year = this.props.location.pathname.replace("/", "");
		this.setState({ year: year });
		this.getPhotos(year);
	}

	getPhotos = (year) => {
		fetch(`http://localhost:5000/photos/${year}`)
			.then(res => res.json())
			.then(res => this.setState({ photos: res.data }))
			.catch(err => console.error(err));
	}

	render() {
		const { photos } = this.state;
		return (
			<div className="pumpkin-collection">
				<h1>{this.state.year}</h1>
				<div className="pumpkin-collection__photos">
					{photos.map(({image_id, image_file, name}) => 
						<div key={image_id}>
							<img src={'images/' + image_file} alt={name} width="400" />
							<p>{name}</p>
						</div>
					)}
				</div>
			</div>		
		);
	}
}

export default PhotoCollectionPage;
