import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../views/homepage/homepage';
import Audit from '../views/audit/audit';

function smeRoutes() {
  return (
        <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/audit' exact component={Audit}></Route>
    </Switch>
  );
}

export default smeRoutes;
