import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';

import { getConfessions, getComments, Confess, increaseScore, decreaseScore } from './apiclient.js';

getConfessions().then(reRenderApplication);

function reRenderApplication(confessions) {
	render(confessions);
}

function render(confessions) {
	ReactDOM.render((
		<App
			confessions={confessions}
		/>
	), document.getElementById("root"));
};

/*
HINT

getComments={(confessionId) => { 
	getComments(confessionId).then(reRenderApplication); 
}}

onConfess={(content) => {
	Confess(content).then(reRenderApplication);
}}

onScoreIncrease={(confessionId) => {
	increaseScore(confessionId).then(reRenderApplication)
}}

onScoreDecrease={(confessionId) => {
	decreaseScore(confessionId).then(reRenderApplication)
}}
*/