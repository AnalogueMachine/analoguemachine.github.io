import React, { Component } from 'react';
import Header from './Header';
import MainContent from './MainContent';

export default class PrimaryLayout extends Component {
  render() {
    return (
      <div className="primarylayout">
        <Header />
        <MainContent />
      </div>
    );
  }
}