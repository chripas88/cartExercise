import * as actionTypes from '../actions/actionTypes';

const productsFromBackend = [
	{
		id: "fc2b2ff0-53d6-42d0-a673-3fa32024757a",
		imgUrl: "https://image.shutterstock.com/z/stock-photo-pair-of-white-sneakers-isolated-on-white-background-sport-shoes-712448377.jpg",
		name: "Sport Shoes",
		price: 110
	},
	{
		id: "f19bc0de-d445-4109-9f82-f766dc2559c9",
		imgUrl: "https://image.shutterstock.com/z/stock-photo-vintage-red-shoes-on-white-background-92008067.jpg",
		name: "Red SNEAKER",
		price: 91
	},
	{
		id: "6db402c9-110a-413a-84dd-d2d34db7adc8",
		imgUrl: "https://image.shutterstock.com/z/stock-photo-pink-and-black-sport-woman-shoes-isolated-on-white-background-709418083.jpg",
		name: "Sport Shoes Women",
		price: 94
	}
];

const initialState ={
	products: [],
	cartProducts: [],
	totalPrice: 0,
	discount: 10,
	limit: 100
};

const getProducts = (state) => {
	return {
		...state,
		products: productsFromBackend
	};
};

const addToCart = (state, action) => {
	
	let cartProduct= state.cartProducts.find(pr=> pr.id === action.id);
	if(cartProduct) {
		cartProduct.quantity += 1;
		localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
		let newTotalPrice = state.totalPrice + cartProduct.price;
		localStorage.setItem('totalPrice', newTotalPrice);
		return{
			...state,
			totalPrice: newTotalPrice 
		}
	}
	else{
		let newProduct = state.products.find(product=> product.id === action.id);
		newProduct.quantity = 1;
		let updatedCartProducts = [...state.cartProducts, newProduct];
		localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
		let newTotalPrice = state.totalPrice + newProduct.price;
		localStorage.setItem('totalPrice', newTotalPrice);
		return{
			...state,
			cartProducts: updatedCartProducts,
			totalPrice : newTotalPrice
		}
	}
};

const removeFromCart = (state, action) => {
	let cartProduct= state.cartProducts.find(product => product.id === action.id);
	let updatedCartProducts = state.cartProducts.filter(product => product.id !== action.id);
	localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
	let newTotalPrice = state.totalPrice - (cartProduct.price * cartProduct.quantity );
	localStorage.setItem('totalPrice', newTotalPrice);
	return{
		...state,
		cartProducts: updatedCartProducts,
		totalPrice: newTotalPrice
	}
};

const increaseQuantity = (state, action) => {	
	let cartProduct = state.cartProducts.find(product=> product.id === action.id);
	cartProduct.quantity += 1;
	localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
	let newTotalPrice = state.totalPrice + cartProduct.price;
	localStorage.setItem('totalPrice', newTotalPrice);
	return{
		...state,
		totalPrice: newTotalPrice
	}
};

const decreaseQuantity = (state, action) => {
	let cartProduct = state.cartProducts.find(product=> product.id === action.id);
	if(cartProduct.quantity === 1){
		let updatedCartProducts = state.cartProducts.filter(product=>product.id !== action.id);
		localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
		let newTotalPrice = state.totalPrice - cartProduct.price;		
		localStorage.setItem('totalPrice', newTotalPrice);
		return{
			...state,
			cartProducts: updatedCartProducts,
			totalPrice: newTotalPrice
		}
	}
	else {
		cartProduct.quantity -= 1;
		localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
		let newTotalPrice = state.totalPrice - cartProduct.price;
		localStorage.setItem('totalPrice', newTotalPrice);
		return{
			...state,
			totalPrice: newTotalPrice
		}
	} 
};

const getPersistentData = (state, action) => {
	return{
		...state,
		cartProducts: action.cartProducts,
		totalPrice: action.totalPrice
	}
};

const reducer = (state = initialState, action) => {
	switch(action.type){		
		case actionTypes.GET_PRODUCTS: return getProducts(state);
		case actionTypes.GET_PERSISTENT_DATA: return getPersistentData(state, action);
		case actionTypes.ADD_TO_CART: return addToCart(state, action);
		case actionTypes.REMOVE_FROM_CART: return removeFromCart(state, action);
		case actionTypes.INCREASE_QUANTITY: return increaseQuantity(state, action);
		case actionTypes.DECREASE_QUANTITY: return decreaseQuantity(state, action);		
		default: return state;
	}
};

export default reducer;