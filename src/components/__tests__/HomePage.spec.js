import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../HomePage';

describe('Home Page', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<HomePage/>);
    });

    it('should exist', () => {
        expect(wrapper).not.toBe(undefined);
    });
});