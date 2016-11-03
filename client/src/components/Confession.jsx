import React from 'react';

import Score from './Score.jsx';
import CommentsPreview from './CommentsPreview.jsx';

import CommentList from './CommentList.jsx';

export default ({ content, score, comments, commentsCount, getComments }) => (
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