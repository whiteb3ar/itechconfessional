import React, { PropTypes } from 'react';

import ConfessionList from '../components/ConfessionList.jsx';

import { fetchConfessions, fetchComments, increaseScore, decreaseScore, confess } from '../flux/ConfessionsActions.js';

import withSubscription from './ConfessionsListContainerWithSubscription.jsx';

class ConfessionListContainer extends React.Component {
	componentDidMount() {
	    fetchConfessions();
	}

	render() {
		const {
			confessions
		} = this.props;

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

export default withSubscription(ConfessionListContainer);