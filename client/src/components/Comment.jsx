import React, { PropTypes } from 'react';

const Comment = ({ content, score }) => (
	<div className="comment">
		<div className="comment__content">{content}</div>
	</div>
);

Comment.propTypes = {
	content: PropTypes.string.isRequired
};

export default Comment;