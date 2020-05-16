import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../views/homepage/homepage';

function smeRoutes() {
  return (
        <Switch>
        <Route path='/' exact component={Homepage} />
    </Switch>
  );
}

export default smeRoutes;
