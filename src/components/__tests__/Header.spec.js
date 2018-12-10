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

    describe('First link', () => {
        let wrapper, homeLink;

        beforeEach(() => {
            wrapper = shallow(<Header/>);
            homeLink = wrapper.find('#logolink');
        });

        it('should contain a logo', () => {
            expect(homeLink).not.toBe(undefined);
            expect(homeLink.props().className).toBe('logo');
        });

        it('should link to the home page', () => {
            expect(homeLink.props().href).toBe('/');
        })
    });

    describe('Second link', () => {
        let wrapper, aboutMeLink;

        beforeEach(() => {
            wrapper = shallow(<Header/>);
            aboutMeLink = wrapper.find('#aboutmelink');
        });

        it('should exist', () => {
            expect(aboutMeLink.length).toBe(1);
        })

        it('should contain the appropriate text', () => {
            expect(aboutMeLink.props().children).toBe('ABOUT');
        });

        it('should link to the about page', () => {
            expect(aboutMeLink.props().href).toBe('/about');
        });

        it('should be a button', () => {
            expect(aboutMeLink.props().className).toBe('button');
        });
    });
});