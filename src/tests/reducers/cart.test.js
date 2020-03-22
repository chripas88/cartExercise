import cartReducer from '../../store/reducers/cart';
import * as actions from '../../store/actions/actionTypes';

const initialState ={
	products: [],
	cartProducts: [],
	totalPrice: 0,
	discount: 10,
	limit: 100
};

const products = [
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

const cartProducts = [	
		{
			id: "f19bc0de-d445-4109-9f82-f766dc2559c9",
			imgUrl: "https://image.shutterstock.com/z/stock-photo-vintage-red-shoes-on-white-background-92008067.jpg",
			name: "Red SNEAKER",
			price: 91,
			quantity: 2
		},
		{
			id: "6db402c9-110a-413a-84dd-d2d34db7adc8",
			imgUrl: "https://image.shutterstock.com/z/stock-photo-pink-and-black-sport-woman-shoes-isolated-on-white-background-709418083.jpg",
			name: "Sport Shoes Women",
			price: 94,
			quantity: 3
		}
];

const calculateTotal = () => {
	return cartProducts.reduce((total, product) => {return total + product.price * product.quantity},0);
}

const stateWithCartProducts = {
	products: products,
	cartProducts: cartProducts,
	totalPrice: calculateTotal(),
	discount: 10,
	limit: 100
}

it('handles actions of type GET_PRODUCTS', () => {
	const action = {type: actions.GET_PRODUCTS};
	const newState = cartReducer(initialState, action);
	expect(newState.products).toEqual(products);
});

it('handles actions of type ADD_TO_CART with new Product', () => {
	const id = stateWithCartProducts.products[0].id;
	const initialTotalPrice = stateWithCartProducts.totalPrice;
	const action = {type: actions.ADD_TO_CART, id: id};
	const newState = cartReducer(stateWithCartProducts, action);
	expect(newState.cartProducts.length).toEqual(stateWithCartProducts.cartProducts.length + 1);
	const newProduct = newState.cartProducts.find(p => p.id === id);
	const quantity = newProduct.quantity;
	const price = newProduct.price;
	const totalPrice = newState.totalPrice;
	expect(quantity).toEqual(1);
	expect(totalPrice).toEqual(initialTotalPrice + price);
});

it('handles actions of type ADD_TO_CART with existing Product', () => {
	const id = stateWithCartProducts.products[1].id;
	const initialProduct = stateWithCartProducts.cartProducts.find(p => p.id === id);
	const initialQuantity = initialProduct.quantity;
	const initialTotalPrice = stateWithCartProducts.totalPrice;
	const action = {type: actions.ADD_TO_CART, id: id};
	const newState = cartReducer(stateWithCartProducts, action);
	expect(newState.cartProducts.length).toEqual(stateWithCartProducts.cartProducts.length);	
	const newProduct = newState.cartProducts.find(p => p.id === id);
	const quantity = newProduct.quantity;
	const price = newProduct.price;
	const totalPrice = newState.totalPrice;
	expect(quantity).toEqual(initialQuantity + 1);
	expect(totalPrice).toEqual(initialTotalPrice + price);
	
});

it('handles actions of type INCREASE_QUANTITY', () => {
	const id = stateWithCartProducts.products[1].id;
	const initialProduct = stateWithCartProducts.cartProducts.find(p => p.id === id);
	const initialTotalPrice = stateWithCartProducts.totalPrice;
	const initialQuantity = initialProduct.quantity;
	const action = {type: actions.INCREASE_QUANTITY, id: id};
	const newState = cartReducer(stateWithCartProducts, action);	
	const newProduct = newState.cartProducts.find(p => p.id === id);
	expect(newState.cartProducts.length).toEqual(stateWithCartProducts.cartProducts.length);	
	expect(newProduct.quantity).toEqual(initialQuantity + 1);
	expect(newState.totalPrice).toEqual(stateWithCartProducts.totalPrice + newProduct.price);	
});

it('handles actions of type DECREASE_QUANTITY', () => {
	const id = stateWithCartProducts.products[1].id;
	const initialProduct = stateWithCartProducts.cartProducts.find(p => p.id === id);
	const initialTotalPrice = stateWithCartProducts.totalPrice;
	const initialQuantity = initialProduct.quantity;
	const action = {type: actions.DECREASE_QUANTITY, id: id};
	const newState = cartReducer(stateWithCartProducts, action);	
	const newProduct = newState.cartProducts.find(p => p.id === id);
	expect(newState.cartProducts.length).toEqual(stateWithCartProducts.cartProducts.length);	
	expect(newProduct.quantity).toEqual(initialQuantity - 1);
	expect(newState.totalPrice).toEqual(stateWithCartProducts.totalPrice - newProduct.price);	
});

it('handles actions of type REMOVE_FROM_CART', () => {	
	const id = stateWithCartProducts.cartProducts[0].id;
	const price = stateWithCartProducts.cartProducts[0].price;
	const quantity = stateWithCartProducts.cartProducts[0].quantity;
	const initialTotalPrice = stateWithCartProducts.totalPrice;
	const action = {type: actions.REMOVE_FROM_CART, id: id};
	const newState = cartReducer(stateWithCartProducts, action);
	expect(newState.cartProducts.length).toEqual(stateWithCartProducts.cartProducts.length -1);	
	const totalPrice = newState.totalPrice;	
	expect(totalPrice).toEqual(initialTotalPrice - price * quantity);
});

it('handles action with unknown type', () => {
	const newState = cartReducer(initialState, {type: 'DUMMY'});
	expect(newState).toEqual(initialState);
});