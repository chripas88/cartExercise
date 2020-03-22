import React from 'react';
import NavigationItem from './NavigationItem';

const toolbar = (props) => (
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<ul className="navbar-nav mr-auto">
			<NavigationItem className="navbar-brand" link="/"><strong>My e-shop</strong></NavigationItem>      
		</ul>
		<ul className="nav navbar-nav navbar-right">
			<div className="nav-item"><span className="navbar-text">Hello, Admin!</span></div>
			<NavigationItem link="/cart"><button type="button" className="btn btn-success">My Cart</button></NavigationItem>
		</ul>
	</nav>
);

export default toolbar;