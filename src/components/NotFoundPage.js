import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <h1>404! Ooops, not found Go to: <Link to="/">Home</Link></h1>
    </div>
);

export default NotFoundPage;