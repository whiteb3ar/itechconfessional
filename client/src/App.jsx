import React from 'react';

import Header from './components/Header.jsx';
import PanelBar from './components/PanelBar.jsx';
import ConfessionList from './components/ConfessionList.jsx';

import './App.css';

export default () => (
	<div className="application">
		<Header title="iTechConfessional" />
		<PanelBar title="Do not hesistate. It's anonymous." />
		<ConfessionList />
	</div>
);

/*export default class App extends React.Component {
	render() {
		return (
			<div className="application">
				<Header title="iTechConfessional" />
				<PanelBar title="Do not hesistate. It's anonymous." />
				<ConfessionList />
			</div>
		);
	}
}*/