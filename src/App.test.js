import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

let wrapper;

describe('Main app', () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should contain a BrowserRouter component', () => {
    expect(wrapper.find('BrowserRouter').length).toBe(1);
  });

  it('should contain a PrimaryLayout component', () => {
    expect(wrapper.find('PrimaryLayout').length).toBe(1);
  });
}); 
