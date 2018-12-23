import React, { Component } from 'react';
import Logo from '../human.png';
import ImageCard from './ImageCard';
import nodeLogo from '../Node.js_logo.svg.png';
import reactLogo from '../React-icon.svg.png';
import miniCSSLogo from '../minicsslogo.png';

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
            <h3 className="subtitle">A software developer working in Belfast</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm">
            <p className="subtitle">This website was built with the following technologies:</p>
          </div>
        </div>
        <div className="row">
          <ImageCard image={nodeLogo} altText="Node logo"/>
          <ImageCard image={reactLogo} altText="React logo" />
          <ImageCard image={miniCSSLogo} altText="mini.css logo" />
        </div>
      </div>
    );
  }
}