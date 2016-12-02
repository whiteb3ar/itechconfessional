import React, { PropTypes } from 'react';

import Score from './Score.jsx';
import CommentsPreview from './CommentsPreview.jsx';

import CommentList from './CommentList.jsx';

const Confession = ({ confessionId, content, score, comments, commentsCount, onClick, onScoreIncrease, onScoreDecrease }) => (
	<div className="confession">
		<div className="confession__content">
			{content}
		</div>
		<div className="confession__summary">
			<Score 
				score={score}
				onIncrease={() => onScoreIncrease(confessionId)}
				onDecrease={() => onScoreDecrease(confessionId)}
			/>
			<CommentsPreview
				count={commentsCount}
				onClick={onClick}
			/>
		</div>
		{
			comments && comments.length ? <CommentList comments={comments} /> : null
		}
	</div>
);

Confession.propTypes = {
	confessionId: PropTypes.number.isRequired, 
	content: PropTypes.string.isRequired,
	score: PropTypes.number.isRequired,
	comments: PropTypes.array,
	commentsCount: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired,
	onScoreIncrease: PropTypes.func.isRequired,
	onScoreDecrease: PropTypes.func.isRequired
};

export default Confession;