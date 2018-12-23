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

    it('should return a container div', () => {
        const innerDiv = wrapper.getElement();

        expect(innerDiv.type).toBe('div');
        expect(innerDiv.props.className).toBe('container');
    });

    describe('Container', () => {
        let container;

        beforeEach(() => {
            container = wrapper.getElement();
        });

        describe('First row', () => {
            let row;

            beforeEach(() => {
                row = container.props.children;
            });

            it('should contain a row with a centred div for the title', () => {
                expect(row.props.className).toBe('row');
                expect(row.props.children.props.className).toBe('col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm');
            });

            describe('Main title', () => {
                let titleImageElement, titleElement, subtitleElement;

                beforeEach(() => {
                    titleImageElement = row.props.children.props.children[0]
                    titleElement = row.props.children.props.children[1];
                    subtitleElement = row.props.children.props.children[2];
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
                    expect(titleElement.props.children).toBe('analoguemachine');
                });

                it('should contain a subtitle', () => {
                    expect(subtitleElement.type).toBe('p');
                    expect(subtitleElement.props.className).toBe('subtitle');
                    expect(subtitleElement.props.children).toBe('A software developer working in Belfast');
                });
            });
        });

        describe('Second row', () => {
            // Tech cards
        })
    })
});