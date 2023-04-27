import React from 'react';
import LoginHeader from '../components/ui/Header/LoginHeader';
import '../../css/login.css';
import Footer from '../components/ui/Footer/Footer';
import LoginForm from '../features/authentication/components/LoginForm';

const Login = () => {
    return (
        <div className='login-container'>
            <LoginHeader />
            <div className='wrapper'>
                <div className='login-content'>
                    <div className='login-form-header'>
                        <h2 style={{fontSize: '40px', width: '70%'}}>Sign in to your Account</h2>
                        <p>Welcome back! Please sign in to continue</p>
                    </div>
                    <LoginForm />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
