import React from 'react';
import ReactDOM from 'react-dom';
import '../css/app.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useRoutes, Redirect } from 'react-router-dom';

import AuthHeader from './components/ui/Header/AuthHeader';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Home from './pages/Home';
import PrivateRoute from './utils/PrivateRoute';
import AuthRedirecting from './pages/Auth/AuthRedirecting';
import EmailVerifyMessage from './pages/EmailVerification/EmailVerifyMessage';
import EmailVerificationSuccess from './pages/EmailVerification/EmailVerificationSuccess';

function Main() {

    return (
        <Router>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route element={<Home />} path="/" exact/>
                </Route>
                <Route path="/email-verify-message/:token" element={<EmailVerifyMessage />} />
                <Route path='/verification-success' element={<EmailVerificationSuccess />}></Route>
                <Route element={<Login />} path="/login"/>
                <Route element={<Register />} path="/register"/>
            </Routes>
        </Router>
    );
}

export default Main;
ReactDOM.render(<Main />, document.getElementById('root'));
