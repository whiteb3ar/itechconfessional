import React, { PropTypes } from 'react';
import Comment from './Comment.jsx';

const CommentList = ({ comments }) => (
	<div className="comment-list">
		{
			comments.map((x, i) => (
				<Comment 
					key={i} 
					content={x.content}
					score={x.score}
				/>
			))
		}
	</div>
);

const commentShape = PropTypes.shape({
	content: PropTypes.string.isRequired,
	score: PropTypes.number.isRequired
});

CommentList.propTypes = {
	comments: PropTypes.array.isRequired
};

export default CommentList;