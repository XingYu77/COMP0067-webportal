import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { store } from '../redux/store';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    let state = store.getState();

    return (
        <Route {...rest} render={props => (
            state.authReducer.JWT === null
                ? <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                : <Component {...props} />
        )} />
    );
}