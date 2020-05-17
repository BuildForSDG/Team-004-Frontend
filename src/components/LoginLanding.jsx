import React, { Component } from 'react';
import Login from './Login.jsx';
import LoginSideBar from './common/LoginSidebar.jsx';
import '../styles/login.css';


class LoginLanding extends Component {
  render() {
    this.a = 'Hello';
    return (
        <div className='landing'>
            <Login
              header='Gion'
              subHeader="SME Login Page"
            />
            <LoginSideBar
                heading="Let’s Help your Business"

            />
        </div>
    );
  }
}

export default LoginLanding;
