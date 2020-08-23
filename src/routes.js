import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { istAuthenticated } from './services/auth';
import Main from './pages/Main'

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
            <Route path="/" exact component={Main} />
            {/* <PrivateRoute path="/checkout" component={Checkout} /> */}
        </Switch>
    </BrowserRouter>
);

export default Routes;