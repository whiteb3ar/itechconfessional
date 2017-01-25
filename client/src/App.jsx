import React from 'react';

import Header from './components/Header';
import PanelBar from './components/PanelBar';
import InputWithSubmit from './components/InputWithSubmit';
import ConfessionList from './components/ConfessionList';

import './App.css';

const App = () => (
	<div className="application">
		<Header title="iTechConfessional" />
		<PanelBar>
			<span>{"Do not hesistate. It's anonymous."}</span>
			<InputWithSubmit />
		</PanelBar>
		<ConfessionList />
	</div>
);

export default App;
