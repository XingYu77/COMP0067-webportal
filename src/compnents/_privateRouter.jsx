import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";

class PrivateRoute extends Component {
    render() {
        const { component: Component, ...rest } = this.props
        return (
            <Route {...rest} render={props => (
                this.props.JWT === null
                    ? <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                    : <Component {...props} />
            )} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        JWT: state.authReducer.JWT,
    };
};

export default connect(mapStateToProps, null)(PrivateRoute);
