import React from 'react';
import ReactDOM from 'react-dom';

class Admin extends React.Component {
	render() {
		return (
			<div>
				<h1>Admin</h1>
				<h2>Upload an Image</h2>
				<form action="">
					<input type="text" placeholder="Name" /><br />
					<input type="text" placeholder="Year" /><br />
					<input type="text" placeholder="Filepath" /><br />
					<input type="submit" text="Submit" />
				</form>
			</div>
		);
	}
}

export default Admin;