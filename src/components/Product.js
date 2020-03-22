import React from 'react';

export const product = (props) => {

	return (
		<div className="card">
			<img src={props.imgUrl} className="card-img-top" alt={props.name}/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p>Price: ${props.price}</p>
				<button className="btn btn-primary" onClick={props.addToCart}>Add To Cart</button>
			</div>
		</div>
	);
}

export default product;