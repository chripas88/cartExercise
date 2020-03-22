import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Toolbar from '../../components/Toolbar';
import NavigationItem from '../../components/NavigationItem';



describe('<Toolbar />', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Toolbar />);
	});
	
	it('should render two <NavigationItem /> elements', () => {
		expect(wrapper.find(NavigationItem)).toHaveLength(2);
	});
	
});