import React from 'react';

import Score from './Score.jsx';

export default ({ content, score }) => (
	<div className="comment">
		<div className="comment__content">{content}</div>
		<Score score={score} />
	</div>
);