import React, { PropTypes } from 'react';
import Confession from './Confession.jsx';

const noop = () => {};

const renderConfession = (confession, key, getComments, onScoreIncrease, onScoreDecrease) => (
	<Confession 
		key={key} 
		confessionId={confession.confessionId}
		content={confession.content}
		score={confession.score}
		comments={confession.comments}
		commentsCount={confession.commentsCount}
		onClick={() => getComments(confession.confessionId)}
		onScoreIncrease={onScoreIncrease}
		onScoreDecrease={onScoreDecrease}
	/>
);

class ConfessionList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			confessions: [{
				confessionId: 1,
				content: "this should be replaced with flux store",
				score: 1,
				comments: [],
				commentsCount: 0
			}]
		};	
	}

	render() {
		const {
			confessions
		} = this.state;

		return (
			<div className="confession-list">
				{ 
					confessions.map((x, i) => renderConfession(x, i, noop, noop, noop))
				}
			</div>
		);
	}
}

export default ConfessionList;

/*
HINT
import { fetchConfessions, fetchComments, increaseScore, decreaseScore } from '../flux/ConfessionsActions.js';
import ConfessionsStore from '../flux/ConfessionsStore.js';

...
this._onChange = this._onChange.bind(this);
...
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
*/