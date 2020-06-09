import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Signup from './SignUp.jsx';
import LoginSideBar from '../../common/InvestorsLoginSidebar.jsx';
import '../../../styles/login.css';

class SignupLanding extends Component {
  render() {
    this.a = 'Hello';

    return (
      <Container>
                <div className='landing'>
                  <div className='auth-right'>
                  <Signup
              subHeader="Investor Registration"
            />
                  </div>
                  <div className='auth-left'>
                  <LoginSideBar
                heading="Support a Business to"
            />
                  </div>
        </div>
      </Container>
    );
  }
}

export default SignupLanding;
