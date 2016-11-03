import React from 'react';

export default ({ title }) => (
	<div className="header">
		<img className="header__logo" src="../img/confession-booth-colored.jpg" />
		<span>{title}</span>
	</div>
);