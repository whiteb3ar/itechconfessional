import React, { PropTypes } from 'react';
import highlighter from './Highlighter';

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

export default highlighter(PanelBar);
