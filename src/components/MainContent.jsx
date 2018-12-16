import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

export default class MainContent extends Component {
  render() {
    return (
      <main>
        <Route path='/' exact component={HomePage} />
        <Route path='/about' component={AboutPage}/>
      </main>
    );
  }
}