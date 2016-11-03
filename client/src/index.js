import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './App.jsx';

//const App = () => <div>Hello iTechArt!</div>;
const NotFound = () => <div>Oops. Something was there... or not...</div>

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App} />
		<Route path="*" component={NotFound} />
	</Router>
), document.getElementById("root"));