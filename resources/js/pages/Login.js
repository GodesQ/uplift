import React from 'react';
import LoginHeader from '../components/ui/Header/LoginHeader';

const Login = () => {
    return (
        <div className='login-container'>
            <LoginHeader />
            <div className='wrapper'>
                <div className='login-form'>
                    <h2 style={{fontSize: '40px', width: '70%'}}>Sign in to your Account</h2>
                </div>
            </div>
        </div>
    );
}

export default Login;
