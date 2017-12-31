// HIGHER ORDER COMPONENT - a component (HOC) that renders a component 

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (
        (props) => (
            <div>
                {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>You need to be logged in to see this information</p>}
            </div>
        )
    );
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details"></AuthInfo>,document.getElementById("app"));