import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from '../AboutPage';

describe('About Page', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AboutPage/>);
    });

    it('should exist', () => {
        expect(wrapper).not.toBe(undefined);
    });
});