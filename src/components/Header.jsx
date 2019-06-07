import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { User, GitHub, Twitter } from 'react-feather';

const ICON_SIZE = 18;

export default class Header extends Component {
  render() {
    return (
      <header className="row sticky">
        <Link to='/' id='homelink' className='logo'>GoodCoverage</Link>
        <Link to='/about' id='aboutlink' className='button col-sm col-md'>
          <User size={ICON_SIZE} style={{verticalAlign: "sub"}}/>
          <span className="headerlinktext"> ABOUT</span>
        </Link>
        <a href='https://github.com/GoodCoverage' id='githublink' className='button col-sm col-md'>
          <GitHub size={ICON_SIZE} style={{verticalAlign: "sub"}}/>
          <span className="headerlinktext"> GITHUB</span>
        </a>
        <a href='https://twitter.com/GoodCoverage' id='twitterlink' className='button col-sm col-md'>
          <Twitter size={ICON_SIZE} style={{verticalAlign: "sub"}}/>
          <span className="headerlinktext"> TWITTER</span>
        </a>
      </header>
    )
  }
}