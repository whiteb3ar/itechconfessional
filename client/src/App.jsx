import React from 'react';

import Header from './components/Header';
import PanelBar from './components/PanelBar';
import NewConfessPanel from './containers/NewConfessPanel';
import ConfessionListContainer from './containers/ConfessionListContainer';

import './App.css';

const App = () => (
	<div className="application">
		<Header title="iTechConfessional" />
		<PanelBar>
			<span>{"Do not hesistate. It's anonymous."}</span>
			<NewConfessPanel />
		</PanelBar>
		<ConfessionListContainer />
	</div>
);

export default App;
