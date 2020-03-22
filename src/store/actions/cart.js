import * as actionTypes from './actionTypes';

export const getProducts = () => {
	return {
		type: actionTypes.GET_PRODUCTS
	};
};

export const addToCart = (id) => {
	return {
		type: actionTypes.ADD_TO_CART,
		id
	};
};

export const removeFromCart = (id) => {
	return {
		type: actionTypes.REMOVE_FROM_CART,
		id
	};
};

export const increaseQuantity = (id) => {
	return {
		type: actionTypes.INCREASE_QUANTITY,
		id
	};
};

export const decreaseQuantity = (id) => {
	return {
		type: actionTypes.DECREASE_QUANTITY,
		id
	};
};

export const getPersistentData = (cartProducts, totalPrice) => {
	return {
		type: actionTypes.GET_PERSISTENT_DATA,
		cartProducts,
		totalPrice
	};
};