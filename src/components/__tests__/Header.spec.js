import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';

describe('Header component', () => {
    it('Renders', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
    });
});