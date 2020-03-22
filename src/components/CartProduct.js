import React from 'react';

const cartProduct = (props) => {

	return (
		<React.Fragment>
			<div className="col-md-8">
				<div className="row">
					<div className="col-md-4">
						<img src={props.imgUrl} className="img-thumbnail" alt={props.name}/>
					</div>
					<div className="col-md-4">
							<h5 className="card-title">{props.name}</h5>
					</div>
					<div className="col-md-4">
							<p>Price: ${props.price * props.quantity}</p>
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="input-group mb-3">
					<div className="input-group-prepend" id="button-addon3">
						<button className="btn btn-outline-secondary" type="button" onClick={props.increaseQuantity}>+</button>
						<button className="btn btn-outline-secondary" type="button" onClick={props.decreaseQuantity}>-</button>
						<button className="btn btn-outline-secondary" type="button" onClick={props.removeFromCart}>X</button>
					</div>
					<input type="text" className="form-control" placeholder="" disabled={true} value={props.quantity}/>
				</div>
			</div>
		</React.Fragment>
	);
}

export default React.memo(cartProduct,(prevProps, nextProps) => nextProps.quantity === prevProps.quantity);