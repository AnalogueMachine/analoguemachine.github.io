import React from 'react';
import { shallow } from 'enzyme';
import TechCard from '../ImageCard';

const mockImage = 'mockImage';
const mockURL = 'mockURL';
const mockAltText = 'mockalttext'

describe('Image card', () => {
    let wrapper;

    const renderComponent = (inputImage = mockImage, inputURL = mockURL, inputAlt = mockAltText) => {
        return shallow(<TechCard image={inputImage} url={inputURL} altText={inputAlt} />);
    };

    beforeEach(() => {
        wrapper = renderComponent();
    });

    it('should have container div with appropriate size classes', () => {
        expect(wrapper.props().className).toBe('col-sm-12 col-md-4 col-lg-4');
    });

    describe('Card element', () => {
        let cardElement;

        beforeEach(() => {
            cardElement = wrapper.props().children;
        });

        it('should return a card', () => {
            expect(cardElement.props.className).toBe('card fluid');
        });
    
        it('should have an image in the card', () => {
            expect(cardElement.props.children.type).toBe('img');
        });

        describe('Image element', () => {
            let imageElement;
    
            beforeEach(() => {
                imageElement = cardElement.props.children;
            });
    
            it('should have the appropriate styling on the image', () => {    
                expect(imageElement.props.className).toBe('section media scaletofit');
            });
        
            it('should receive an image prop', () => {
                expect(imageElement.props.src).toEqual(mockImage);
            });
    
            it('should receive an alt text prop', () => {
                expect(imageElement.props.alt).toEqual(mockAltText);
            })
        });
    });
});