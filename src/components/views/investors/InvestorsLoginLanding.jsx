import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Login from './Login.jsx';
import LoginSideBar from '../../common/InvestorsLoginSidebar.jsx';
import '../../../styles/login.css';

class LoginLanding extends Component {
  render() {
    this.a = 'Hello';

    return (
      <Container>
                <div className='landing'>
          <div className='auth-right'>
          <Login
              subHeader="Investors Login"
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

export default LoginLanding;
