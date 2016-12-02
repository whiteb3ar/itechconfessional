import React, { PropTypes } from 'react';
import ConfessInput from './ConfessInput.jsx';

const PanelBar = ({ title, onConfess }) => (
	<div className="panel-bar">
		<span>{title}</span>
		<ConfessInput onConfess={onConfess} />
	</div>
);

PanelBar.propTypes = {
	title: PropTypes.string.isRequired,
	onConfess: PropTypes.func.isRequired
};

export default PanelBar;