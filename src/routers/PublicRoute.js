import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <div>
        <Route {...rest} component={(props) => (
            isAuthenticated ? 
                <Redirect to="/dashboard" /> :
                <Component {...props} />
        )}/>
    </div>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.uid
});

export default connect(mapStateToProps)(PublicRoute);