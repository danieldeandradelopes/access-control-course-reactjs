import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { istAuthenticated } from './services/auth';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

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
            {/* <PrivateRoute path="/checkout" component={Checkout} /> */}
        </Switch>
    </BrowserRouter>
);

export default Routes;