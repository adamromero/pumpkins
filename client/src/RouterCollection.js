import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Gallery from './Gallery';
import PhotoCollectionPage from './PhotoCollectionPage';
import Admin from './Admin';

const RouterCollection = () => (
	<div className="pumpkin">
		<h1 className="pumpkin__heading">Pumpkins</h1>
		<Router>
			<Link to="/">
				<img className="pumpkin-logo" src="images/jack-o-lantern.png" alt="Pumpkins"/>
			</Link>
			<Route exact path="/" component={Gallery} />
			<Route path="/2018" render={props => <PhotoCollectionPage {...props} />} />
			<Route path="/2017" render={props => <PhotoCollectionPage {...props} />} />
			<Route path="/2016" render={props => <PhotoCollectionPage {...props} />} />
			<Route path="/2015" render={props => <PhotoCollectionPage {...props} />} />
			<Route path="/2014" render={props => <PhotoCollectionPage {...props} />} />
			<Route path="/2013" render={props => <PhotoCollectionPage {...props} />} />
			<Route path="/2012" render={props => <PhotoCollectionPage {...props} />} />
			<Route path="/2011" render={props => <PhotoCollectionPage {...props} />} />
			<Route path="/2010" render={props => <PhotoCollectionPage {...props} />} />
			<Route path="/admin" component={Admin} />
		</Router>
	</div>
);

export default RouterCollection;
