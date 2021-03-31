import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Product from './Product';
import {AddToCart} from '../Button/Button';


configure({adapter:new Adapter()});
describe('<Product/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Product />);
    });

    it('should render one <AddToCart/>' , ()=> {
        expect(wrapper.find(AddToCart)).toHaveLength(1);
    })
})