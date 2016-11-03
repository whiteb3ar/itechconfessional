import React, { PropTypes } from 'react';

import Score from './Score.jsx';
import CommentsPreview from './CommentsPreview.jsx';

import CommentList from './CommentList.jsx';

const Confession = ({ content, score, comments, commentsCount, getComments }) => (
	<div className="confession">
		<div className="confession__content">{content}</div>		
		<div className="confession__summary">
			<Score score={score} />
			<CommentsPreview count={commentsCount} onClick={getComments} />
		</div>
		{
			comments.length ? <CommentList comments={comments} /> : null
		}
	</div>
);

Confession.propTypes = {
	content: PropTypes.string.isRequired,
	score: PropTypes.number.isRequired,
	comments: PropTypes.array.isRequired,
	commentsCount: PropTypes.number.isRequired,
	getComments: PropTypes.func.isRequired
};

export default Confession;