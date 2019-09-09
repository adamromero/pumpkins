import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Login extends Component {
	constructor() {
		super();
		this.state {
			email: '',
			password: '',
			error: {}
		}
	}
	handleSubmit = (e) => {
		e.preventDefault();


	}
	render() {
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					<input type="text" placeholder="Name" /><br />
					<input type="password" placeholder="Password" /><br />
					<input type="submit" text="Submit" />
				</form>
			</div>
		);
	}
}

export default Login;