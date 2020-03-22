import React from 'react';
import { shallow } from 'enzyme';
import { Products } from '../../containers/Products';
import Product from '../../components/Product';

describe('<Products />', () => {
	
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
	
	let wrapper;
	
	beforeEach(() => {
		wrapper = shallow(<Products getProducts={()=>{}}/>);
	});
	
	it('should render <Product /> when receiving products', () => {
		wrapper.setProps({products: products});
		expect(wrapper.find(Product)).toHaveLength(products.length);
	});
});