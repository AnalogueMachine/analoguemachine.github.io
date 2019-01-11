import { HEADER_ICON_SIZE } from "../constants";

jest.unmock('../constants.js');

describe('Constants', () => {
    it('should contain a constant for header icon size', () => {
        expect(HEADER_ICON_SIZE).toEqual(18);
    });
});