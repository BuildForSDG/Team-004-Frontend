import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../views/dashboards/sme/sme';

function smeRoutes() {
  return (
        <Switch>
        <Route path='/dashboard' exact component={Dashboard} />
    </Switch>
  );
}

export default smeRoutes;
