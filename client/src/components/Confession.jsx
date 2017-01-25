import React, { PropTypes } from 'react';

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

export default Confession;
