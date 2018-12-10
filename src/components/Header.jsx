import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                <a href='/' id='logolink' className='logo'>Home</a>
                <a href='/about' id='aboutmelink' className='button'>ABOUT</a>
            </header>
        )
    }
}