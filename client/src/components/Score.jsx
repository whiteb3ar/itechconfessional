import React, { PropTypes } from 'react';

import highlighter from './Highlighter';

const scoreStyle = (score) => {
	if (!score) {
		return null;
	}

	return {
		color: score > 0 ? 'green' : 'red'
	};
};

const Score = ({ score, onIncrease, onDecrease, style }) => (
	<div className="score" style={style}>
		<button className="borderless-button" onClick={onIncrease}>
			+
		</button>
		<div className="score__value" style={scoreStyle(score)}>
			{score}
		</div>
		<button className="borderless-button" onClick={onDecrease}>
			-
		</button>
	</div>
);

Score.propTypes = {
	score: PropTypes.number.isRequired,
	onIncrease: PropTypes.func.isRequired,
	onDecrease: PropTypes.func.isRequired
};

export default highlighter(Score);
