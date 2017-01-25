import React, { PropTypes } from 'react';

import highlighter from './Highlighter';
import Score from './Score';

import {
	increaseScore,
	decreaseScore,
} from '../apiclient';

const Confession = ({ confessionId, content, score, style }) => (
	<div className="confession" style={style}>
		<div className="confession__content">
			{content}
		</div>
		<div className="confession__summary">
			<Score
				score={score}
				onIncrease={() => increaseScore(confessionId)}
				onDecrease={() => decreaseScore(confessionId)}
			/>
		</div>
	</div>
);

Confession.propTypes = {
	confessionId: PropTypes.number.isRequired,
	content: PropTypes.string.isRequired,
	score: PropTypes.number.isRequired
};

export default highlighter(Confession);
