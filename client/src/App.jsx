import React from 'react';

import Header from './components/Header.jsx';
import PanelBar from './components/PanelBar.jsx';
import ConfessionList from './components/ConfessionList.jsx';

import './App.css';

export default ({ confessions, onConfess, getComments, onScoreIncrease, onScoreDecrease }) => (
	<div className="application">
		<Header title="iTechConfessional" />
		<PanelBar title="Do not hesistate. It's anonymous." onConfess={onConfess} />
		<ConfessionList
			confessions={confessions}
			getComments={getComments}
			onScoreIncrease={onScoreIncrease} 
			onScoreDecrease={onScoreDecrease}
		/>
	</div>
);	