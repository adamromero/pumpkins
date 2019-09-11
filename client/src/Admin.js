import React, { Component } from 'react';

class Admin extends React.Component {

	handleSubmit = (e) => {
		e.preventDefault();
		const entry = {
			name: e.target.name.value,
			year: e.target.year.value,
			filepath: e.target.filepath.value
		};

		fetch("/photos", {
			method: 'POST',
			headers: { 'Content-Type': 'applicaton/json' },
			body: JSON.stringify(entry)
		}).then((response) => {
			if (response.status >= 400) {
				throw new Error("bad response from server");
			}
			return response.json();
		}).then((response) => {
			console.log(response);
		}).catch((err) => {
			console.log(err);
		});
	}

	render() {
		return (
			<div>
				<h1>Admin</h1>
				<h2>Upload an Image</h2>
				<form onSubmit={this.handleSubmit}>
					<input type="text" placeholder="Name" name="name" /><br />
					<input type="text" placeholder="Year" name="year" /><br />
					<input type="text" placeholder="Filepath" name="filepath" /><br />
					<input type="submit" text="Submit" />
				</form>
			</div>
		);
	}
}

export default Admin;