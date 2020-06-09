import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../views/dashboards/sme/sme';
import Projects from '../views/projects/projects';
import Transactions from '../views/transactions/transaction';

function smeRoutes() {
  return (
        <Switch>
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/transactions' exact component={Transactions} />
    </Switch>
  );
}

export default smeRoutes;
