import React, { useState } from 'react';
import { asset } from 'helpers';
import axios from 'axios';
import { Link, redirect, useNavigate } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
import useGoogleLogin from '../hooks/useGoogleLogin';
import {Connection} from '../../../../../public/js/spark/module/logic/connection';

const LoginForm = () => {

    const navigate = useNavigate();

    const [dataForm, setDataForm] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    function handleTextChange(identifier, e) {
        setDataForm({...dataForm, [identifier]: e.target.value});
    }

    const handleGoogleSubmit = async () => {
        const response = await useGoogleLogin();
        window.location.href = response.data;
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        const nam = new Connection();
        const device_name = nam.getUser().device + ' ' + nam.getUser().platform;

        const response = await useLogin({...dataForm, device_name: device_name});
        setErrors(response?.errors);
        console.log(response);
        if(response?.status == 200) {
            localStorage.setItem('token', response?.data.token);
            navigate('/', {replace: true});
        }
    }

    return (
        <div className='login-form'>
            <form method='POST' onSubmit={handleLoginSubmit} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <div className='form-group'>
                    <div className='float-label'>
                        <input type='email' name='email' value={dataForm.email} onChange={handleTextChange.bind(this, 'email')}/>
                        <label htmlFor="email" className={ dataForm.email !== '' ? "active-label" : ""}>
                            E-mail
                        </label>
                    </div>
                    <span className='danger text-danger'>{errors?.hasOwnProperty('email') ? errors.email : null}</span>
                </div>

                <div className='form-group'>
                    <div className='float-label'>
                        <input type='password' name='password' value={dataForm.password} onChange={handleTextChange.bind(this, 'password')}/>
                        <label htmlFor="password" className={ dataForm.password !== '' ? "active-label" : ""}>
                            Password
                        </label>
                    </div>
                    <span className='danger text-danger'>{errors?.hasOwnProperty('password') ? errors.password : null}</span>
                </div>
                <div className='forgot-password'>
                    <Link to='/'>Forgot Password</Link>
                </div>
                <div className='submit-button-container'>
                    <button type='submit' className='btn login-btn'>Login</button>
                </div>
            </form>
            <div className='login-footer'>
                <div className='login-with-header'>
                    <hr style={{height: '1px', backgroundColor: '#000000',  border: 'none'}}></hr>
                    <p>Or login with</p>
                </div>
                <div className='login-with-buttons'>
                    <button type='button' onClick={handleGoogleSubmit}>
                        <img style={{marginRight: '10px'}} src={asset('images/logos/google-logo.png')} />
                        Google
                    </button>
                    <button type='button'>
                        <img style={{marginRight: '10px'}} src={asset('images/logos/facebook-logo.png')} />
                        Facebook
                    </button>
                </div>
                <div style={{textAlign: 'center'}}>
                    <label >Don't have an account? <Link to='/register'>Register</Link></label>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
