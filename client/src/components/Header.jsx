import React, { PropTypes } from 'react';

const Header = ({ title }) => (
	<div className="header">
		<img className="header__logo" src="../img/confession-booth-colored.jpg" />
		<span>{title}</span>
	</div>
);

Header.propTypes = {
	title: PropTypes.string.isRequired
};

export default Header;