import React, { Component } from 'react';

class AdminEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image_id: '',
			image_file: '',
			name: '',
			year: '',
			rating: ''
		}
	}

	componentDidMount() {
		this.getPhotoAttributes();
	}

	getPhotoAttributes = () => {
		const api = process.env.NODE_ENV !== "production" ? 'https://quiet-chamber-88821.herokuapp.com' : 'http://localhost:5000';

		fetch(`${api}/photo/${this.props.match.params.id}`)
		.then(res => res.json())
		.then(res => this.setState(res.data))
		.catch(err => console.error(err));
	}

	handleSubmit = e => {
		e.preventDefault();
	}

	render() {
		const { image_id, image_file, name, year, rating } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<h1>Admin Edit</h1>
				<input name="image_id" value={image_id} /><br />
				<input name="image_file" value={image_file} /><br />
				<input name="name" value={name} /><br />
				<input name="year" value={year} /><br />
				<input name="rating" value={rating} /><br />
				<input type="submit" text="Submit" />
			</form>
		);
	}
}


export default AdminEdit;