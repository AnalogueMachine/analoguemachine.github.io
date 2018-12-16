import React from 'react';
import Header from '../Header';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

describe('Header component', () => {
    let wrapper, homeLink, aboutLink, githubLink, twitterLink;

    beforeEach(() => {
        wrapper = shallow(<Header/>);
        homeLink = wrapper.find('#homelink');
        aboutLink = wrapper.find('#aboutlink');
        githubLink = wrapper.find('#githublink');
        twitterLink = wrapper.find('#twitterlink');
    });

    it('contains a header element', () => {
        expect(wrapper.find('header').length).toEqual(1);
    });

    describe('Home link', () => {
        it('should exist', () => {
            expect(homeLink).not.toBe(undefined);
        });

        it('should contain a logo', () => {
            expect(homeLink.props().className).toBe('logo');
        });

        it('should be a react-router link', () => {
            expect(homeLink.type()).toBe(Link);
        });

        it('should link to the home page', () => {
            expect(homeLink.props().to).toBe('/');
        });

        it('should contain the text AnalogueMachine', () => {
            expect(homeLink.props().children).toBe('analoguemachine');
        });
    });

    describe('About link', () => {
        it('should exist', () => {
            expect(aboutLink.length).toBe(1);
        });

        it('should be a react-router link', () => {
            expect(aboutLink.type()).toBe(Link);
        });

        it('should contain the appropriate text', () => {
            expect(aboutLink.props().children).toBe('ABOUT');
        });

        it('should link to the about page', () => {
            expect(aboutLink.props().to).toBe('/about');
        });

        it('should be a button', () => {
            expect(aboutLink.props().className).toBe('button');
        });
    });

    describe('Github link', () => {
        it('should exist', () => {
            expect(githubLink.length).toBe(1);
        });

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

    describe('Twitter link', () => {
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