import React, { Component } from 'react';
import axios from 'axios';

class AdminEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	componentDidMount() {
		this.getPhotoAttributes();
	}

	getPhotoAttributes = () => {
		const api = process.env.NODE_ENV === "production" ? 'https://quiet-chamber-88821.herokuapp.com' : 'http://localhost:5000';

		fetch(`${api}/photo/${this.props.match.params.id}`)
		.then(res => res.json())
		.then(res => this.setState(res.data[0]))
		.catch(err => console.error(err));
	}

	handleSubmit = e => {
		e.preventDefault();
		const entry = {
			image_file: e.target.image_file.value,
			name: e.target.name.value,
			year: e.target.year.value,
			rating: e.target.rating.value
		};
		console.log(entry);
		const api = process.env.NODE_ENV === "production" ? 'https://quiet-chamber-88821.herokuapp.com' : 'http://localhost:5000';
		axios.post(`${api}/edit/${this.props.match.params.id}`, entry)
			.then(res => res.data)
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		const { image_file, name, year, rating } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<h1>Admin Edit</h1>
				<input name="image_file" defaultValue={image_file} /><br />
				<input name="name" defaultValue={name} /><br />
				<input name="year" defaultValue={year} /><br />
				<input name="rating" defaultValue={rating} /><br />
				<input type="submit" text="Submit" />
			</form>
		);
	}
}


export default AdminEdit;