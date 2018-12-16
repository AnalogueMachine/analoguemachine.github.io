import React from 'react';
import MainContent from '../MainContent';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import HomePage from '../HomePage';
import AboutPage from '../AboutPage';

describe('Main content component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MainContent/>);
    });

    it('should contain a main element', () => {
        expect(wrapper.find('main').length).toBe(1);
    });

    describe('main element', () => {
        it('should contain a home route', () => {
            const homeRoute = wrapper.props().children[0];
            expect(homeRoute.type).toBe(Route);
            expect(homeRoute.props.path).toBe('/');
            expect(homeRoute.props.component).toBe(HomePage);
        });

        it('should contain an /about route', () => {
            const aboutRoute = wrapper.props().children[1];
            expect(aboutRoute.type).toBe(Route);
            expect(aboutRoute.props.path).toBe('/about');
            expect(aboutRoute.props.component).toBe(AboutPage);
        });
    });
});