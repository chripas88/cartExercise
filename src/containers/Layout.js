import React from 'react';
import Toolbar from '../components/Toolbar';

class Layout extends React.Component {
	
	render(){
		return(
			<div className="container">
				<Toolbar />
				<main >{this.props.children}</main>
			</div>
		);
	}

}

export default Layout;