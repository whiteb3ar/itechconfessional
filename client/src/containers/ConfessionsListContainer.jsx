import React from 'react';

import ConfessionList from '../components/ConfessionList.jsx';

/*import { fetchConfessions, fetchComments } from '../flux/ConfessionsActions.js';
import ConfessionsStore from '../flux/ConfessionsStore.js';

export default class ConfessionListContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			confessions: []
		};

		this._onChange = this._onChange.bind(this);
	}

	_onChange() {
		this.setState({ ...this.state,
			confessions: ConfessionsStore.getConfessions()
		});
	}

	componentDidMount() {
	    ConfessionsStore.addChangeListener(this._onChange);

	    fetchConfessions();
	}

	componentWillUnmount() {
		ConfessionsStore.removeChangeListener(this._onChange);
	}

	getComments(id) {
		fetchComments(id);
	}

	render() {
		return (
			<ConfessionList
				confessions={this.state.confessions}
				getComments={this.getComments}
			/>
		);
	}
}*/

import withSubscription from './ConfessionsListContainerWithSubscription.jsx';

import { fetchConfessions, fetchComments } from '../flux/ConfessionsActions.js';
import ConfessionsStore from '../flux/ConfessionsStore.js';

class ConfessionListContainer extends React.Component {
	componentDidMount() {
	    fetchConfessions();
	}

	render() {
		return (
			<ConfessionList
				confessions={this.props.confessions}
				getComments={fetchComments}
			/>
		);
	}
}

export default withSubscription(ConfessionListContainer);