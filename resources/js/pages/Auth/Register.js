import React from 'react';
import LoginHeader from '../../components/ui/Header/LoginHeader';
import '../../../css/login.css';
import Footer from '../../components/ui/Footer/Footer';
import RegisterForm from '../../features/authentication/components/RegisterForm';

const Login = () => {
    return (
        <div className='login-container'>
            <LoginHeader />
            <div className='wrapper'>
                <div className='login-content'>
                    <div className='login-form-header'>
                        <h2 style={{fontSize: '40px', width: '70%'}}>Create your Account</h2>
                        <p>Welcome! Please create account to continue</p>
                    </div>
                    <RegisterForm />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
