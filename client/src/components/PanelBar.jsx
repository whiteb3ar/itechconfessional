import React, { PropTypes } from 'react';
import ConfessInput from './ConfessInput.jsx';

const PanelBar = ({ title }) => (
	<div className="panel-bar">
		<span>{title}</span>
		<ConfessInput />
	</div>
);

PanelBar.propTypes = {
	title: PropTypes.string.isRequired,
};

export default PanelBar;

/*

HINT

, onConfess
...
onConfess={onConfess}
...
onConfess: PropTypes.func.isRequired

*/