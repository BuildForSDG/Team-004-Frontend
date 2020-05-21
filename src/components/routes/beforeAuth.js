import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../views/homepage/homepage';
import LoginLanding from '../views/Login/LoginLanding.jsx';
import InvestorsSignup from '../views/investors/SignupLanding.jsx';
import InvestorsLogin from '../views/investors/InvestorsLoginLanding.jsx';
import SmeSignUpLanding from '../views/signup/smeSignupLanding.jsx';
import Audit from '../views/audit/audit';

function smeRoutes() {
  return (
        <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/sme-login' exact component={LoginLanding} />
        <Route path='/sme-signup' exact component={SmeSignUpLanding} />
        <Route path='/investors-signup' exact component={InvestorsSignup} />
        <Route path='/investors-login' exact component={InvestorsLogin} />
        <Route path='/audit' exact component={Audit}></Route>
    </Switch>
  );
}

export default smeRoutes;
