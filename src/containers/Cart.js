import React from 'react';
import { connect } from 'react-redux';
import CartProduct from '../components/CartProduct';
import * as actions from '../store/actions/index';

import xml2js from 'xml2js';

export class Cart extends React.Component {
		
	removeFromCartHandler = (id) => {
		this.props.removeFromCart(id);
	}
	
	increaseQuantityHandler = (id) => {
		this.props.increaseQuantity(id);
		this.props.history.replace('/cart');
	}
	
	decreaseQuantityHandler = (id) => {
		this.props.decreaseQuantity(id);
		this.props.history.replace('/cart');
	}
	
	printOrder = () => {
		
		const Products = [];
		const obj = { Products };
		
		for(let p of this.props.cartProducts){
			let product = {
				Product : {
					id: p.id,
					quantity: p.quantity
				}
			}			
			obj.Products.push(product);
		}		
		
		var builder = new xml2js.Builder();
		var xml = builder.buildObject(obj);
		console.log(xml);
	}
		
	render(){
		
		let displayCart = <p>Your cart is empty!</p>;
		
		let discountMessage = this.props.totalPrice > this.props.limit ? 
				<div className="row">
					A discount of {this.props.discount}% has been applied!
				</div> : '';
		
		let discountPrice = this.props.totalPrice > this.props.limit ?
				this.props.totalPrice - (this.props.totalPrice * this.props.discount / 100) :
				this.props.totalPrice;
		
		let totalPrice = discountPrice !== this.props.totalPrice ?
				<p>Total: <strike>${this.props.totalPrice}</strike> ${discountPrice} </p> :
				<p>Total: ${discountPrice} </p>;
		
		if(this.props.cartProducts){
			if(this.props.cartProducts.length > 0){
				displayCart = (
					<div className="row">
						<div className="col-md-8">
							<h2>Cart Products</h2>
							{this.props.cartProducts.map(product => (
								<div className="row" key={product.id}>
									<CartProduct
										id={product.id}
										imgUrl={product.imgUrl} 
										name={product.name}
										price={product.price}
										quantity={product.quantity}
										removeFromCart={() => this.removeFromCartHandler(product.id)}
										increaseQuantity={() => this.increaseQuantityHandler(product.id)}
										decreaseQuantity={() => this.decreaseQuantityHandler(product.id)}
									/>
								</div>
							))}
						</div>
						<div className="col-md-4">
							<h2>Cart Summary</h2>
							<div className="row">
								{totalPrice}
							</div>
							{discountMessage}
							<div className="row">
								<button type="button" className="btn btn-danger" onClick={this.printOrder}>ORDER NOW</button>
							</div>
						</div>
					</div>
				);
			}
		}
		return(
			<React.Fragment>
				{displayCart}
			</React.Fragment>	
		);
	}
}

const mapStateToProps = state => {
	return{
		cartProducts: state.cart.cartProducts,
		totalPrice: state.cart.totalPrice,
		discount: state.cart.discount,
		limit: state.cart.limit
	};
}

const mapDispatchToProps = dispatch => {
	return{
		removeFromCart: (id) => dispatch(actions.removeFromCart(id)),
		increaseQuantity: (id) => dispatch(actions.increaseQuantity(id)),
		decreaseQuantity: (id) => dispatch(actions.decreaseQuantity(id))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);