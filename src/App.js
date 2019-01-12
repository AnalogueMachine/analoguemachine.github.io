import React, { Component } from 'react';
import './App.css';
import PrimaryLayout from './components/PrimaryLayout';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <PrimaryLayout />
      </BrowserRouter>
    );
  }
}

export default App;
