import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CartItem from './CartItem';
import {Delete} from '../Button/Button';


configure({adapter:new Adapter()});
describe('<CartItem/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CartItem />);
    });

    it('should render one <Delete/>' , ()=> {
        expect(wrapper.find(Delete)).toHaveLength(1);
    })
})
