import React from 'react';

class PhotoCollectionPage extends React.Component {
	state = {
		/*
		image_id: null,
		image_file: [],
		name: null,
		year: null
		*/
		photos: [],
		year: null
	}
	componentDidMount() {
		const year = this.props.location.pathname.replace("/", "");
		this.setState({ year: year });
		this.getPhotos(year);
		//this.setState(this.props.location.state);
	}

	getPhotos = (pathname) => {
		fetch(`http://localhost:5000/photos/${pathname}`)
			.then(res => res.json())
			.then(res => this.setState({ photos: res.data }))
			.catch(err => console.error(err));
	}

	render() {
		const { photos } = this.state;
		return (
			<React.Fragment>
				<h1>{this.state.year}</h1>
			{photos.map(({image_id, image_file, name, year}) => 
				<div key={image_id}>
					<img src={'images/' + image_file} alt={name} width="400" />
					<p>{name}</p>
				</div>
			)}
			</React.Fragment>		
		);
	}
}

export default PhotoCollectionPage;
