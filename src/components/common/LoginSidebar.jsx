import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
                          <h3>Easy to Scale your Business through</h3>
                          <p>
                            <span className="blue-span">BuildForSDG</span> connects you with the right investors to help scale your business through the five stages of SME Growth:- Existence, Survival, Success, Take-Off and Maturity
                          </p>
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
