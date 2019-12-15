import React from 'react';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';

import NavigationBar from './navbar';
import HomePage from '../pages/homepage';

const NotFoundRedirect = () => <Redirect to='/not-found' />

const Routes = () => {
    return(
        <BrowserRouter>
            <NavigationBar />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route component={NotFoundRedirect} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;