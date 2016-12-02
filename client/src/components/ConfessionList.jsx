import React, { PropTypes } from 'react';
import Confession from './Confession.jsx';

import changeLogger from '../containers/PropsChangeLogger.jsx';

/* 
everything is just a javascript code. render can be extracted into separate funcitons etc.
you can use all the power of javascript with no limitations
*/

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

const ConfessionList = ({ confessions, getComments, onScoreIncrease, onScoreDecrease }) => (
	<div className="confession-list">
		{ 
			confessions.map((x, i) => renderConfession(x, i, getComments, onScoreIncrease, onScoreDecrease))
		}
	</div>
);

const confessionShape = PropTypes.shape({
	confessionId: PropTypes.number.isRequired,
	content: PropTypes.string.isRequired,
	score: PropTypes.number.isRequired,
	comments: PropTypes.array,
	commentsCount: PropTypes.number.isRequired
});

ConfessionList.propTypes = {
	confessions: PropTypes.arrayOf(confessionShape).isRequired,
	getComments: PropTypes.func.isRequired,
	onScoreIncrease: PropTypes.func.isRequired,
	onScoreDecrease: PropTypes.func.isRequired
};

export default changeLogger(ConfessionList);