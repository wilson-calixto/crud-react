import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainRoutes from './MainRoutes';



const Routes = () => {
    return (
        <Router>



                <Route  path='/' component={MainRoutes} />
                {/* <Route path={`${path}/comp2`} component={comp2Routes} />
                <Route path={`${path}/comp3`} component={comp3Routes} />
                <Route path={`${path}/comp4`} component={comp4Routes} /> */}
        </Router>
    );
};
export default Routes;
