import React, { Component } from 'react';
import Logo from '../human.png';
import TechCard from './TechCard';

export default class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm">
            <img src={Logo} alt="Main logo" className="maintitle"></img>
            <h1 className="maintitle">
              analoguemachine
            </h1>
            <p className="subtitle">A software developer working in Belfast</p>
          </div>
        </div>
      </div>
    );
  }
}