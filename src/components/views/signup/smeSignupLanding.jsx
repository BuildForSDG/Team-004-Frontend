import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Signup from './smeSignup.jsx';
import LoginSideBar from '../../common/LoginSidebar.jsx';
import '../../../styles/login.css';

class SmeSignupLanding extends Component {
  render() {
    this.a = 'Hello';

    return (
      <Container>
        <div className='landing'>
          <div className='auth-right'>
          <Signup
          subHeader="SME Signup"/>

          </div>
          <div className='auth-left'>
          <LoginSideBar
          heading="Let’s Help your Business"
          />
          </div>
        </div>
      </Container>
    );
  }
}

export default SmeSignupLanding;
