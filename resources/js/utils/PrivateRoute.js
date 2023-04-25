import React from 'react';
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = () => {
    let auth = false;
    return (
        auth ? <Outlet/> : <Navigate to="/login"/>
    );
}

export default PrivateRoute;
