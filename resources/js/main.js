import React from 'react';
import ReactDOM from 'react-dom';
import '../css/app.css';

import AuthHeader from './components/ui/Header/AuthHeader';
import Login from './pages/Login';
import Home from './pages/Home';
import PrivateRoute from './utils/PrivateRoute';

import { BrowserRouter as Router, Routes, Route, Navigate, useRoutes, Redirect } from 'react-router-dom';

const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: 'login',
        element: <Login />,
    },
];

function Main() {

    const canActivate = () => {
        return false ? true : <Navigate to="/login" />;
    };

    return (
        <Router>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route element={<Home />} path="/" exact/>
                </Route>
                <Route element={<Login />} path="/login"/>
            </Routes>
        </Router>
    );
}

export default Main;
ReactDOM.render(<Main />, document.getElementById('root'));
