import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageCard extends Component {
  render() {
    return (
      <div className="col-sm-12 col-md-4 col-lg-4">
        <a className="card fluid" href={this.props.url}>
          <img className="section media scaletofit" src={this.props.image} alt={this.props.altText} />
        </a>   
      </div>  
    );
  }
} 

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  url: PropTypes.string,
  altText: PropTypes.string.isRequired
};