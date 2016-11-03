import React from 'react';

import Thumb from './Thumb.jsx';

const scoreStyle = score => {
	if (!score) {
		return null;
	}

	return {
		color: score > 0 ? 'green' : 'red'
	};
}

export default ({ score }) => (
	<div className="score">
		<Thumb flip="true" />
		<div className="score__value" style={scoreStyle(score)}>{score}</div>
		<Thumb />
	</div>
);