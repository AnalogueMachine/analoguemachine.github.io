import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import { shallow } from 'enzyme';

describe('Header component', () => {
    let wrapper, homeLink, githubLink, twitterLink;

    beforeEach(() => {
        wrapper = shallow(<Header/>);
        homeLink = wrapper.find('#homelink');
        githubLink = wrapper.find('#githublink');
        twitterLink = wrapper.find('#twitterlink');
    });

    it('renders', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
    });

    it('contains a header element', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.find('header').length).toEqual(1);
    });

    describe('First link', () => {
        it('should contain a logo', () => {
            expect(homeLink).not.toBe(undefined);
            expect(homeLink.props().className).toBe('logo');
        });

        it('should link to the home page', () => {
            expect(homeLink.props().href).toBe('/');
        });

        it('should contain the text AnalogueMachine', () => {
            expect(homeLink.props().children).toBe('analoguemachine');
        });
    });

    describe('Second link', () => {
        it('should exist', () => {
            expect(githubLink.length).toBe(1);
        })

        it('should contain the appropriate text', () => {
            expect(githubLink.props().children).toBe('GITHUB');
        });

        it('should link to the about page', () => {
            expect(githubLink.props().href).toBe('https://github.com/AnalogueMachine');
        });

        it('should be a button', () => {
            expect(githubLink.props().className).toBe('button');
        });
    });

    describe('Third link', () => {
        it('should exist', () => {
            expect(twitterLink.length).toBe(1);
        })

        it('should contain the appropriate text', () => {
            expect(twitterLink.props().children).toBe('TWITTER');
        });

        it('should link to the about page', () => {
            expect(twitterLink.props().href).toBe('https://twitter.com/AnalogueMachine');
        });

        it('should be a button', () => {
            expect(twitterLink.props().className).toBe('button');
        });
    });
});