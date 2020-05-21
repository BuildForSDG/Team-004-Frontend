import React, { Component } from 'react';
import Signup from './SignUp.jsx';
import LoginSideBar from '../../common/InvestorsLoginSidebar.jsx';
import '../../../styles/login.css';

class SignupLanding extends Component {
  render() {
    this.a = 'Hello';

    return (
        <div className='landing'>
            <Signup
              subHeader="Investor Registration"
            />
            <LoginSideBar
                heading="Support a Business to"

            />
        </div>
    );
  }
}

export default SignupLanding;
