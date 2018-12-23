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

    it('has a header with a responsive class name', () => {
        expect(wrapper.find('header').props().className).toBe('row sticky');
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

        it('should link to the about page', () => {
            expect(aboutLink.props().to).toBe('/about');
        });

        it('should be a responsive button', () => {
            expect(aboutLink.props().className).toBe('button col-sm col-md');
        });

        describe('icon', () => {
            it('should contain a span element for an icon', () => {
                expect(aboutLink.props().children[0].type).toBe('span');
            });
    
            it('should contain an appropriate image in the icon span', () => {
                expect(aboutLink.props().children[0].props.className).toBe('icon-user');
            });
        });
        
        describe('link text', () => {
            it('should contain a span element for the link text', () => {
                expect(aboutLink.props().children[1].type).toBe('span');
            });
    
            it('should disappear when the screen gets too small', () => {
                expect(aboutLink.props().children[1].props.className).toBe('headerlinktext');
            });
    
            it('should contain the appropriate text', () => {
                expect(aboutLink.props().children[1].props.children).toBe('ABOUT');
            });
        });
    });

    describe('Github link', () => {
        it('should exist', () => {
            expect(githubLink.length).toBe(1);
        });

        it('should link to the about page', () => {
            expect(githubLink.props().href).toBe('https://github.com/AnalogueMachine');
        });

        it('should be a responsive button', () => {
            expect(githubLink.props().className).toBe('button col-sm col-md');
        });

        describe('link icon', () => {
            it('should contain a span element for an icon', () => {
                expect(githubLink.props().children[0].type).toBe('span');
            });
    
            it('should contain an appropriate image', () => {
                expect(githubLink.props().children[0].props.className).toBe('icon-share');
            });
        });

        describe('link text', () => {
            it('should contain a span element for the link text', () => {
                expect(githubLink.props().children[1].type).toBe('span');
            });
    
            it('should disappear when the screen gets too small', () => {
                expect(githubLink.props().children[1].props.className).toBe('headerlinktext');
            });
    
            it('should contain the appropriate text', () => {
                expect(githubLink.props().children[1].props.children).toBe('GITHUB');
            });
        });
    });

    describe('Twitter link', () => {
        it('should exist', () => {
            expect(twitterLink.length).toBe(1);
        });
        
        it('should link to the about page', () => {
            expect(twitterLink.props().href).toBe('https://twitter.com/AnalogueMachine');
        });

        it('should be a responsive button', () => {
            expect(twitterLink.props().className).toBe('button col-sm col-md');
        });

        describe('link icon', () => {
            it('should contain a span element for an icon', () => {
                expect(twitterLink.props().children[0].type).toBe('span');
            });
    
            it('should contain an appropriate image', () => {
                expect(twitterLink.props().children[0].props.className).toBe('icon-rss');
            });
        });;

        describe('link text', () => {
            it('should contain a span element for the link text', () => {
                expect(twitterLink.props().children[1].type).toBe('span');
            });
    
            it('should disappear when the screen gets too small', () => {
                expect(twitterLink.props().children[1].props.className).toBe('headerlinktext');
            });
    
            it('should contain the appropriate text', () => {
                expect(twitterLink.props().children[1].props.children).toBe('TWITTER');
            });
        });
    });
});