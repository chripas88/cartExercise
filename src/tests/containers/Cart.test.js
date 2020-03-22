import React from 'react';
import { shallow } from 'enzyme';
import { Cart } from '../../containers/Cart';
import CartProduct from '../../components/CartProduct';

describe('<Cart />', () => {
	
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
	
	let wrapper;
	
	beforeEach(() => {
		wrapper = shallow(<Cart />);

	});
	
	it('should render <CartProduct /> when receiving cart products', () => {
		wrapper.setProps({cartProducts: cartProducts});
		expect(wrapper.find(CartProduct)).toHaveLength(cartProducts.length);
	});	
	
});