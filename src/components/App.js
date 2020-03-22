import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import * as actions from '../store/actions/index';
import Layout from '../containers/Layout';
import Products from '../containers/Products';
import Cart from '../containers/Cart';
import { connect } from 'react-redux';

class App extends React.Component{
	
	componentDidMount(){
		const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
		const totalPrice = parseFloat(localStorage.getItem('totalPrice'));
		if(cartProducts && totalPrice) {
			this.props.getPersistentData(cartProducts, totalPrice);
		}
		else{
			localStorage.removeItem('cartProducts');
			localStorage.removeItem('totalPrice');
		}
	}
	
	render(){
		let routes = (
			<Switch>
				<Route path="/cart" component={Cart} />
				<Route path="/" exact component={Products} />
				<Redirect to="/" />
			</Switch>
		);
		
		return(
			<Layout>
				{routes}
			</Layout>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return{
		getPersistentData: (cartProducts, totalPrice) => dispatch(actions.getPersistentData(cartProducts, totalPrice))
	};
}

export default withRouter(connect(null, mapDispatchToProps)(App));
