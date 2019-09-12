import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {
	state = {
		photos: []
	}

	componentDidMount() {
		//this.getPhotos();
	}

	getPhotos = () => {
		const api = process.env.NODE_ENV === "production" || true ? 'https://quiet-chamber-88821.herokuapp.com' : 'http://localhost:5000';

		fetch(`${api}/photos_all`)
			.then(res => res.json())
			.then(res => this.setState({ photos: res.data }))
			.catch(err => console.error(err));
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const entry = {
			name: e.target.name.value,
			year: e.target.year.value,
			filepath: e.target.filepath.value
		};

		const api = process.env.NODE_ENV === "production" || true ? 'https://quiet-chamber-88821.herokuapp.com' : 'http://localhost:5000';
		axios.post(`${api}/photos/${entry.year}`, entry)
			.then(res => {
				console.log(res);
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		return (
			<div>
				<h1>Admin</h1>
				<h2>Images</h2>


				<h2>Upload an Image</h2>
				<form onSubmit={this.handleSubmit}>
					<input type="text" placeholder="Name" name="name" /><br />
					<input type="text" placeholder="Year" name="year" /><br />
					<input type="text" placeholder="Filepath" name="filepath" /><br />
					<label htmlFor="galleryImage">Set to Gallery Image: </label>
					<input id="galleryImage" type="checkbox" name="gallery_image" value="true" /><br />
					<input type="submit" text="Submit" />
				</form>
			</div>
		);
	}
}

export default Admin;