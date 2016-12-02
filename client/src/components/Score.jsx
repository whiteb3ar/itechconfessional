import React, { PropTypes } from 'react';
import Thumb from './Thumb.jsx';

const scoreStyle = score => {
	if (!score) {
		return null;
	}

	return {
		color: score > 0 ? 'green' : 'red'
	};
}

const Score = ({ score, onIncrease, onDecrease }) => (
	<div className="score">
		<button className="clear-button" onClick={onIncrease}>
			+
		</button>
		<div className="score__value" style={scoreStyle(score)}>
			{score}
		</div>
		<button className="clear-button" onClick={onDecrease}>
			-
		</button>
	</div>
);

Score.propTypes = {
	score: PropTypes.number.isRequired,
	onIncrease: PropTypes.func.isRequired,
	onDecrease: PropTypes.func.isRequired
};

export default Score;