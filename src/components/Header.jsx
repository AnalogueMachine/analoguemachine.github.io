import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="row sticky">
        <Link to='/' id='homelink' className='logo'>analoguemachine</Link>
        <Link to='/about' id='aboutlink' className='button col-sm col-md'>
          <span className="icon-user"></span>
          <span className="headerlinktext">ABOUT</span>
        </Link>
        <a href='https://github.com/AnalogueMachine' id='githublink' className='button col-sm col-md'>
          <span className="icon-share"></span>
          <span className="headerlinktext">GITHUB</span>
        </a>
        <a href='https://twitter.com/AnalogueMachine' id='twitterlink' className='button col-sm col-md'>
          <span className="icon-rss"></span>
          <span className="headerlinktext">TWITTER</span>
        </a>
      </header>
    )
  }
}