import React, { Component } from 'react';
import Login from './Login.jsx';
import LoginSideBar from '../../common/InvestorsLoginSidebar';
import '../../../styles/login.css';

class LoginLanding extends Component {
  render() {
    this.a = 'Hello';

    return (
        <div className='landing'>
            <Login
              subHeader="Investors Login"
            />
            <LoginSideBar
                heading="Support a Business to"

            />
        </div>
    );
  }
}

export default LoginLanding;
