import React, { PropTypes } from 'react';

import ConfessionList from '../components/ConfessionList.jsx';

import { fetchConfessions, fetchComments, increaseScore, decreaseScore } from '../flux/ConfessionsActions.js';
import ConfessionsStore from '../flux/ConfessionsStore.js';

class ConfessionListContainer extends React.Component {
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

	render() {
		const {
			confessions
		} = this.state;

		return (
			<ConfessionList
				confessions={confessions}
				getComments={fetchComments}
				onScoreIncrease={increaseScore}
				onScoreDecrease={decreaseScore}
			/>
		);
	}
}

export default ConfessionListContainer;