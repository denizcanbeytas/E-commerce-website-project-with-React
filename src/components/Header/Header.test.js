import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {NavLink} from 'react-router-dom';
import Header from './Header';


configure({adapter:new Adapter()});
describe('<Header/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    it('should render two <NavLink/>' , ()=> {
        expect(wrapper.find(NavLink)).toHaveLength(2);
    })
})
