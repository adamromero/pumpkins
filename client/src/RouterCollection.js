import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Gallery from './Gallery';
import PhotoCollectionPage from './PhotoCollectionPage';

const RouterCollection = () => (
	<Router>
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
	</Router>
);

export default RouterCollection;
