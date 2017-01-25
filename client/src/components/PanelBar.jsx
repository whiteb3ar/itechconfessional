import React, { PropTypes } from 'react';

const PanelBar = () => (
	<div className="panel-bar">
		Not implemented yet
	</div>
);

export default PanelBar;

/*
HINT

const PanelBar = ({ children, style }) => (
	<div className="panel-bar" style={style}>
		{children}
	</div>
);

PanelBar.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	style: PropTypes.object
};

PanelBar.defaultProps = {
	children: null
};
*/
