import React from 'react';

import Comment from './Comment.jsx';

export default ({ comments }) => (
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