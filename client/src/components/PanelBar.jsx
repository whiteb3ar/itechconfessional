import React from 'react';

import ConfessInput from './ConfessInput.jsx';

export default ({ title, confess }) => (
	<div className="panel-bar">
		<span>{title}</span>
		<ConfessInput confess={null} />
	</div>
);