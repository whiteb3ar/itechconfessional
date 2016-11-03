import React from 'react';

import Header from './components/Header.jsx';
import PanelBar from './components/PanelBar.jsx';
import ConfessionList from './components/ConfessionList.jsx';

import './App.css';

/*import confessions from '../../server/confessions.js';

var id = 1;
const getId = () => {
	return id++;
};

confessions.forEach(confession => {
	confession.confessionId = getId();
	confession.comments.forEach(comment => {
		comment.commentId = getId();
	})
});

export default () => (
	<div className="application">
		<Header title="iTechConfessional" />
		<PanelBar title="Do not hesistate. It's anonymous." />
		<ConfessionList confessions={confessions} />
	</div>
);*/

import ConfessionListContainer from './containers/ConfessionsListContainer.jsx';

export default class App extends React.Component {
	render() {
		return (
			<div className="application">
				<Header title="iTechConfessional" />
				<PanelBar title="Do not hesistate. It's anonymous." />
				<ConfessionListContainer />
			</div>
		);
	}
}