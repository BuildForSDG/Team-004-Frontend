import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../views/dashboards/sme/sme';
import InvestorsDashboard from '../views/dashboards/investors/index.jsx';

function smeRoutes() {
  return (
        <Switch>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/investor-dashboard' component={InvestorsDashboard} />
    </Switch>
  );
}

export default smeRoutes;
