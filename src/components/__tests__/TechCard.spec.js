import React from 'react';
import { shallow } from 'enzyme';
import TechCard from '../TechCard';

const mockImage = 'mockImage';
const mockURL = 'mockURL';
const mockAltText = 'mockalttext'

describe('Tech card', () => {
    let wrapper;

    const renderComponent = (inputImage = mockImage, inputURL = mockURL, inputAlt = mockAltText) => {
        return shallow(<TechCard image={inputImage} url={inputURL} altText={inputAlt} />);
    };

    beforeEach(() => {
        wrapper = renderComponent();
    });

    it('should return a card', () => {
        expect(wrapper.props().className).toBe('card fluid');
    });

    it('should have an image in the card', () => {
        expect(wrapper.props().children.type).toBe('img');
    });

    describe('Image element', () => {
        let imageElement;

        beforeEach(() => {
            imageElement = wrapper.props().children;
        });

        it('should have the appropriate styling on the image', () => {    
            expect(imageElement.props.className).toBe('section media');
        });
    
        it('should receive an image prop', () => {
            expect(imageElement.props.src).toEqual(mockImage);
        });

        it('should receive an alt text prop', () => {
            expect(imageElement.props.alt).toEqual(mockAltText);
        })
    });
});