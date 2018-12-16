import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <Link to='/' id='homelink' className='logo'>analoguemachine</Link>
        <Link to='/about' id='aboutlink' className='button'>ABOUT</Link>
        <a href='https://github.com/AnalogueMachine' id='githublink' className='button'>GITHUB</a>
        <a href='https://twitter.com/AnalogueMachine' id='twitterlink' className='button'>TWITTER</a>
      </header>
    )
  }
}