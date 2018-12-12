import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                <a href='/' id='homelink' className='logo'>analoguemachine</a>
                <a href='https://github.com/AnalogueMachine' id='githublink' className='button'>GITHUB</a>
                <a href='https://twitter.com/AnalogueMachine' id='twitterlink' className='button'>TWITTER</a>
            </header>
        )
    }
}