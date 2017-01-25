import React, { PropTypes } from 'react';

const Header = ({ title, style }) => (
	<div className="header" style={style}>
		<img
			className="header__logo"
			src="../img/confession-booth-colored.jpg" alt="Let everybody know ;)"
		/>
		<span>{title}</span>
	</div>
);

Header.propTypes = {
	title: PropTypes.string.isRequired
};

export default Header;
