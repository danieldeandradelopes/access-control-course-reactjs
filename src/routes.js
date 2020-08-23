import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { istAuthenticated } from './services/auth';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            istAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{ pathname: '/sign-in', state: { from: props.location } }}
                    />
                )
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
        </Switch>
    </BrowserRouter>
);

export default Routes;