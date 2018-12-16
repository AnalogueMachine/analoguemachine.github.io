import React from 'react';
import PrimaryLayout from '../PrimaryLayout';
import { shallow } from 'enzyme';

describe('Primary Layout', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<PrimaryLayout/>)
    });

    it('should have the appropriate class name', () => {
        expect(wrapper.props().className).toBe('primarylayout');
    });

    it('should contain a Header component', () => {
        expect(wrapper.find('Header').length).toBe(1);
    });

    it('should contain a MainContent component', () => {
        expect(wrapper.find('MainContent').length).toBe(1);
    });
});