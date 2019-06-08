import React, { Component } from 'react';
import Logo from '../human.png';
import ImageCard from './ImageCard';
import nodeLogo from '../Node.js_logo.svg.png';
import reactLogo from '../React-icon.svg.png';
import miniCSSLogo from '../minicsslogo.png';
import jestLogo from '../jest-logo.png';
import reactRouterLogo from '../react-router-logo.png';
import vscodeLogo from '../vscode.png';

const cards = [
  {
    image: nodeLogo,
    altText: "Node logo",
    url: "https://nodejs.org/"
  },
  {
    image: reactLogo,
    altText: "React logo",
    url: "https://reactjs.org/"
  },
  {
    image: miniCSSLogo,
    altText: "mini.css logo",
    url: "https://minicss.org/"
  },
  {
    image: jestLogo,
    altText: "Jest logo",
    url: "https://jestjs.io/"
  },
  {
    image: reactRouterLogo,
    altText: "React Router logo",
    url: "https://reacttraining.com/react-router/"
  },
  {
    image: vscodeLogo,
    altText: "Visual Studio Code logo",
    url: "https://code.visualstudio.com/"
  }
];

export default class HomePage extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  renderCards() {
    return cards.map((card, index) => {
      return <ImageCard key={index} image={card.image} altText={card.altText} url={card.url} />
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm">
            <img src={Logo} alt="Main logo" className="maintitle"></img>
            <h1 className="maintitle">
              HundredPercentCoverage
            </h1>
            <h3 className="subtitle">A software developer working in Belfast</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm">
            <p className="subtitle">This website was built in a test-driven fashion with the following technologies:</p>
          </div>
        </div>
        <div className="row">
          {this.renderCards()}
        </div>
      </div>
    );
  }
}
