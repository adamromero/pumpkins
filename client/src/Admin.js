import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Admin extends Component {
	state = {
		photos: []
	}

	componentDidMount() {
		this.getPhotos();
	}

	getPhotos = () => {
		const api = process.env.NODE_ENV === "production" ? 'https://quiet-chamber-88821.herokuapp.com' : 'http://localhost:5000';

		fetch(`${api}/photos_all`)
			.then(res => res.json())
			.then(res => this.setState({ photos: res.data }))
			.catch(err => console.error(err));
	}

	deletePhoto = (id) => {
		const api = process.env.NODE_ENV === "production" ? 'https://quiet-chamber-88821.herokuapp.com' : 'http://localhost:5000';
		axios.delete(`${api}/delete/${id}`)
		.then(res => res.data);
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const entry = {
			name: e.target.name.value,
			year: e.target.year.value,
			filepath: e.target.filepath.value,
			gallery_image: e.target.gallery_image.checked
		};

		const api = process.env.NODE_ENV === "production" ? 'https://quiet-chamber-88821.herokuapp.com' : 'http://localhost:5000';
		axios.post(`${api}/photos/${entry.year}`, entry)
			.then(res => {
				console.log(res);
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		const photos = this.state.photos;
		return (
			<div>
				<h1>Admin</h1>
				<h2>Images</h2>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Image</th>
							<th>Year</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
					{photos.map(({image_id, image_file, name, year, rating}) => (
						<tr key={image_id}>
							<td>{image_id}</td>
							<td>{name}</td>
							<td><img src={`images/${image_file}`} width="100" alt={name}/></td>
							<td>{year}</td>
							<td>
								<Link to={`/edit/${image_id}`}>Edit</Link>
								<button onClick={() => this.deletePhoto(image_id)}>Delete</button>
							</td>
						</tr>
					))}
					</tbody>
				</table>
				<h2>Upload an Image</h2>
				<form onSubmit={this.handleSubmit}>
					<input type="text" placeholder="Name" name="name" /><br />
					<input type="text" placeholder="Year" name="year" /><br />
					<input type="text" placeholder="Filepath" name="filepath" /><br />
					<label htmlFor="galleryImage">Set to Gallery Image: </label>
					<input id="galleryImage" type="checkbox" name="gallery_image" /><br />
					<input type="submit" text="Submit" />
				</form>
			</div>
		);
	}
}

export default Admin;