import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../HomePage';
import ImageCard from '../ImageCard';

const scrollToSpy = jest.fn();
global.scrollTo = scrollToSpy;

describe('Home Page', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<HomePage/>);
    });

    it('should exist', () => {
        expect(wrapper).not.toBe(undefined);
    });

    it('should return a container div', () => {
        const innerDiv = wrapper.getElement();

        expect(innerDiv.type).toBe('div');
        expect(innerDiv.props.className).toBe('container');
    });

    describe('componentDidMount', () => {
        it('should return the page to the top', () => {
            wrapper.instance().componentDidMount();
            expect(scrollToSpy).toBeCalledWith(0,0);
        });
    });

    describe('Container', () => {
        let container;

        beforeEach(() => {
            container = wrapper.getElement();
        });

        describe('First row', () => {
            let firstRow;

            beforeEach(() => {
                firstRow = container.props.children[0];
            });

            it('should contain a row with a centred div for the title', () => {
                expect(firstRow.props.className).toBe('row');
                expect(firstRow.props.children.props.className).toBe('col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm');
            });

            describe('Main title', () => {
                let titleImageElement, titleElement, subtitleElement;

                beforeEach(() => {
                    titleImageElement = firstRow.props.children.props.children[0]
                    titleElement = firstRow.props.children.props.children[1];
                    subtitleElement = firstRow.props.children.props.children[2];
                });

                it('should contain a title image', () => {
                    expect(titleImageElement.type).toBe('img');
                    expect(titleImageElement.props.src).toBe('human.png');
                    expect(titleImageElement.props.alt).toBe('Main logo');
                    expect(titleImageElement.props.className).toBe('maintitle');
                });

                it('should contain a heading element with the main title', () => {
                    expect(titleElement.type).toBe('h1');
                    expect(titleElement.props.className).toBe('maintitle');
                    expect(titleElement.props.children).toBe('Hundred Percent Coverage');
                });

                it('should contain a subtitle', () => {
                    expect(subtitleElement.type).toBe('h3');
                    expect(subtitleElement.props.className).toBe('subtitle');
                    expect(subtitleElement.props.children).toBe('A software developer working in Belfast');
                });
            });
        });

        describe('Second row', () => {
            let secondRow;

            beforeEach(() => {
                secondRow = container.props.children[1];
            });

            it('should be a row', () => {
                expect(secondRow.props.className).toBe('row');
            });

            describe('Row text container', () => {
                let textContainer;

                beforeEach(() => {
                    textContainer = secondRow.props.children;
                });

                it('should be centred and sized appropriately', () => {
                    expect(textContainer.props.className).toBe('col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm')
                });
                
                it('should contain appropriate text', () => {
                    expect(textContainer.props.children.type).toBe('p');
                    expect(textContainer.props.children.props.className).toBe('subtitle');
                    expect(textContainer.props.children.props.children).toBe('This website was built in a test-driven fashion with the following technologies:');
                });
            });
        });

        describe('Third row', () => {
            let thirdRow;

            beforeEach(() => {
                thirdRow = container.props.children[2];
            });

            it('should be a row', () => {
                expect(thirdRow.props.className).toBe('row');
            });

            describe('Second row container', () => {
                const nodeLogoFile = 'Node.js_logo.svg.png';
                const reactLogoFile = 'React-icon.svg.png';
                const miniCSSLogoFile = 'minicsslogo.png';
                const jestLogoFile = 'jest-logo.png';
                const reactRouterLogoFile = 'react-router-logo.png';
                const vscodeLogoFile = 'vscode.png';

                it('should contain an ImageCard for node', () => {
                    const nodeCard = thirdRow.props.children[0];
                    
                    expect(nodeCard.type).toBe(ImageCard);
                    expect(nodeCard.props.image).toBe(nodeLogoFile);
                    expect(nodeCard.props.altText).toBe('Node logo');
                });

                it('should contain an ImageCard for React', () => {
                    const reactCard = thirdRow.props.children[1];
                    
                    expect(reactCard.type).toBe(ImageCard);
                    expect(reactCard.props.image).toBe(reactLogoFile);
                    expect(reactCard.props.altText).toBe('React logo');
                });

                it('should contain an ImageCard for mini.css', () => {
                    const miniCSSCard = thirdRow.props.children[2];
                    
                    expect(miniCSSCard.type).toBe(ImageCard);
                    expect(miniCSSCard.props.image).toBe(miniCSSLogoFile);
                    expect(miniCSSCard.props.altText).toBe('mini.css logo');
                });

                it('should contain an ImageCard forJest', () => {
                    const jestCard = thirdRow.props.children[3];
                    
                    expect(jestCard.type).toBe(ImageCard);
                    expect(jestCard.props.image).toBe(jestLogoFile);
                    expect(jestCard.props.altText).toBe('Jest logo');
                });

                it('should contain an ImageCard for React Router', () => {
                    const reactRouterCard = thirdRow.props.children[4];
                    
                    expect(reactRouterCard.type).toBe(ImageCard);
                    expect(reactRouterCard.props.image).toBe(reactRouterLogoFile);
                    expect(reactRouterCard.props.altText).toBe('React Router logo');
                });

                it('should contain an ImageCard for React Router', () => {
                    const vscodeCard = thirdRow.props.children[5];
                    
                    expect(vscodeCard.type).toBe(ImageCard);
                    expect(vscodeCard.props.image).toBe(vscodeLogoFile);
                    expect(vscodeCard.props.altText).toBe('Visual Studio Code logo');
                });
            });
        });
    });
});
