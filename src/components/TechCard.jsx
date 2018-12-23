import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TechCard extends Component {
  render() {
    return (
       <div className="card fluid">
         <img className="section media" src={this.props.image} alt={this.props.altText} />
       </div>     
    );
  }
}

TechCard.propTypes = {
  image: PropTypes.string.isRequired,
  url: PropTypes.string,
  altText: PropTypes.string.isRequired
};