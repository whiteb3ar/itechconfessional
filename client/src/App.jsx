import React from 'react';

import Header from './components/Header.jsx';
import PanelBar from './components/PanelBar.jsx';

import { confess } from './flux/ConfessionsActions.js';
import ConfessionsListContainer from './containers/ConfessionsListContainer.jsx';

import './App.css';

export default ({ confessions, onConfess, getComments, onScoreIncrease, onScoreDecrease }) => (
	<div className="application">
		<Header title="iTechConfessional" />
		<PanelBar title="Do not hesistate. It's anonymous." onConfess={confess} />
		<ConfessionsListContainer />
	</div>
);	