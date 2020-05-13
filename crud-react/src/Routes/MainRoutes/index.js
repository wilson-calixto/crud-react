import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import Product from '../../Pages/App/Register/Product';
import Test from '../../Pages/App/Register/Test';
import Tema from '../../Pages/App/Register/Tema';
// Side_Bar
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Side_Bar from '../../components/Side_Bar';

export default function MainRoutes() {
    const { path } = useRouteMatch();

    return (
        <>
            <Router>

                <Side_Bar />
                <Switch>


                <Route path={`${path}product`} component={Product} />
                <Route path={`${path}tabela`} component={Test} />
                <Route path={`${path}tema`} component={Tema} />
                </Switch>

            </Router>
        </>
    );
}