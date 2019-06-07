import React from 'react';
import Header from '../Header';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import { HEADER_ICON_SIZE } from '../../utils/constants'

describe('Header component', () => {
    let wrapper, homeLink, aboutLink, githubLink, twitterLink;

    const correctStyle = {verticalAlign: 'sub'};

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

        it('should contain the text GoodCoverage', () => {
            expect(homeLink.props().children).toBe('GoodCoverage');
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
            let userIcon;

            beforeEach(() => {
                userIcon = aboutLink.props().children[0];
            });

            it('should contain a User icon', () => {
                expect(userIcon.type.name).toBe('User');
            });
    
            it('should be the appropriate size', () => {
                expect(userIcon.props.size).toBe(HEADER_ICON_SIZE);
            });

            it('should be correctly aligned', () => {
                expect(userIcon.props.style).toEqual(correctStyle);
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
                expect(aboutLink.props().children[1].props.children).toBe(' ABOUT');
            });
        });
    });

    describe('Github link', () => {
        it('should exist', () => {
            expect(githubLink.length).toBe(1);
        });

        it('should link to the about page', () => {
            expect(githubLink.props().href).toBe('https://github.com/GoodCoverage');
        });

        it('should be a responsive button', () => {
            expect(githubLink.props().className).toBe('button col-sm col-md');
        });

        describe('icon', () => {
            let githubIcon;

            beforeEach(() => {
                githubIcon = githubLink.props().children[0];
            });

            it('should contain a Github icon', () => {
                expect(githubIcon.type.name).toBe('GitHub');
            });
    
            it('should be the appropriate size', () => {
                expect(githubIcon.props.size).toBe(HEADER_ICON_SIZE);
            });

            it('should be correctly aligned', () => {
                expect(githubIcon.props.style).toEqual(correctStyle);
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
                expect(githubLink.props().children[1].props.children).toBe(' GITHUB');
            });
        });
    });

    describe('Twitter link', () => {
        it('should exist', () => {
            expect(twitterLink.length).toBe(1);
        });
        
        it('should link to the about page', () => {
            expect(twitterLink.props().href).toBe('https://twitter.com/GoodCoverage');
        });

        it('should be a responsive button', () => {
            expect(twitterLink.props().className).toBe('button col-sm col-md');
        });

        describe('icon', () => {
            let twitterIcon;

            beforeEach(() => {
                twitterIcon = twitterLink.props().children[0];
            });

            it('should contain a span element for an icon', () => {
                expect(twitterIcon.type.name).toBe('Twitter');
            });
    
            it('should be the appropriate size', () => {
                expect(twitterIcon.props.size).toBe(HEADER_ICON_SIZE);
            });

            it('should be correctly aligned', () => {
                expect(twitterIcon.props.style).toEqual(correctStyle);
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
                expect(twitterLink.props().children[1].props.children).toBe(' TWITTER');
            });
        });
    });
});