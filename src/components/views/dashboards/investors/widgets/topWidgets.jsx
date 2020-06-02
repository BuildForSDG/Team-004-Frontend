import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

class TopWidget extends Component {
  render() {
    this.name = 'top';

    return (
      <div className='top-widget'>
        <Fade>
        <h2>{this.props.title}</h2>
        </Fade>
        <div className="bold">
          <h3>{this.props.boldText}</h3>
        </div>
        <p>{this.props.details}</p>
      </div>
    );
  }
}
TopWidget.propTypes = {
  title: PropTypes.String,
  boldText: PropTypes.String,
  details: PropTypes.String

};

export default TopWidget;
