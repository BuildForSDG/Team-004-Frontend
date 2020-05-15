import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../dashboards/sme';

const smeRoutes = () => (
        <Switch>
            <Route path='/dashboard' exact component={Dashboard} />
        </Switch>
);

export default smeRoutes;
