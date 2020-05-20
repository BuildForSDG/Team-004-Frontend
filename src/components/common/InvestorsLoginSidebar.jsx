import React, { Component } from 'react';
import PropTypes from 'prop-types';
import step1img from '../../images/steps (6).svg';

class LoginSideBar extends Component {
  render() {
    return (
            <div className='login-sidbar'>
              <div className="sidebar-heading">
                <h1>{this.props.heading} <span className='green-span'></span></h1>
                <h2>{this.props.subHeading} </h2>
              </div>
              <div className="sidbar-steps">
                  <div className="sidebar-step-items">
                      <div className="step-text">
                          <h3>Support a Business, scale your finance</h3>
                          <p>
                            <span className="blue-span">BuildForSDG</span> Connects you with the right SMEs that you can invest your money without fear of losing it all yet getting maximum returns.
                          </p>
                      </div>
                      <div className="step-svg">
                         <img src={step1img} alt="step1"/>
                      </div>
                  </div>
              </div>
            </div>
    );
  }
}

LoginSideBar.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string
};

export default LoginSideBar;
