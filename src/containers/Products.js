import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import Product from '../components/Product';

export class Products extends Component {
	
	componentDidMount() {
		this.props.getProducts();
	}
	
	addToCartHandler = (id) => {
		this.props.addToCart(id);
	}
	
	render () {
		
		let productList = this.props.products ? <React.Fragment>{this.props.products.map(product => (
						<div className="col-md-4 col-sm-6" key={product.id}>
							<Product
									imgUrl={product.imgUrl} 
									name={product.name}
									price={product.price}
									addToCart={() => this.addToCartHandler(product.id)}/>
						</div>
					))}</React.Fragment> : <div>Out of stock</div>;
		
		return (
			<React.Fragment>
				<div className="row">
					<div className="col-md-12">
						<h2>Products</h2>
					</div>	
				</div>
				<div className="row">
					{productList}
				</div>
			</React.Fragment>
		);
	};
}

const mapStateToProps = state => {
	return {
		products: state.cart.products
	};
};

const mapDispatchToProps = dispatch => {
	return{
		getProducts: () => dispatch(actions.getProducts()),
		addToCart: (id) => dispatch(actions.addToCart(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
