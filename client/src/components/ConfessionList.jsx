import React, { PropTypes } from 'react';
import Confession from './Confession';

const ConfessionList = () => (
	<div className="confession-list">
		not implemented yet
	</div>
);

export default ConfessionList;

/*
HINT

const ConfessionList = ({ confessions, style }) => (
	<div className="confession-list" style={style}>
		{
			confessions.map(x => (
				<Confession
					key={x.confessionId}
					confessionId={x.confessionId}
					content={x.content}
					score={x.score}
				/>
			))
		}
	</div>
);

const confessionShape = PropTypes.shape({
	confessionId: PropTypes.number.isRequired,
	content: PropTypes.string.isRequired,
	score: PropTypes.number.isRequired
});

ConfessionList.propTypes = {
	confessions: PropTypes.arrayOf(confessionShape).isRequired
};

*/
