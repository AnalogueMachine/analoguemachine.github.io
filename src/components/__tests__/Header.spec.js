import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import { shallow } from 'enzyme';

describe('Header component', () => {
    it('renders', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
    });

    it('contains a header element', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.find('header').length).toEqual(1);
    });
});