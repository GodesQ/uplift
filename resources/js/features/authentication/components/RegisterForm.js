import React, { useState } from 'react';
import { asset } from 'helpers';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useRegister from '../hooks/useRegister';
import useGoogleLogin from '../hooks/useGoogleLogin';

const RegisterForm = () => {

    const navigate = useNavigate();

    const [dataForm, setDataForm] = useState({
        email: '',
        password: '',
        confirm_password: '',
    });

    const [errors, setErrors] = useState({});

    function handleTextChange(identifier, e) {
        setDataForm({...dataForm, [identifier]: e.target.value});
    }

    const handleGoogleSubmit = async () => {
        const response = await useGoogleLogin();
        window.location.href = response.data;
    }

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        const response = await useRegister(dataForm);
        setErrors(response?.errors);
        if(response.status == 201) navigate(`/email-verify-message/${response.data.email_token}`, {replace: true});
    }

    return (
        <div className='login-form'>
            <form method='POST' onSubmit={handleRegisterSubmit} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
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

                <div className='form-group'>
                    <div className='float-label'>
                        <input type='password' name='confirm_password' value={dataForm.confirm_password} onChange={handleTextChange.bind(this, 'confirm_password')}/>
                        <label htmlFor="password" className={ dataForm.confirm_password !== '' ? "active-label" : ""}>
                            Confirm Password
                        </label>
                    </div>
                    <span className='danger text-danger'>{errors?.hasOwnProperty('confirm_password') ? errors.confirm_password : null}</span>
                </div>
                <div className='submit-button-container'>
                    <button type='submit' className='btn login-btn'>Register</button>
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
                    <label >Have an account? <Link to='/login'>Login</Link></label>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;
