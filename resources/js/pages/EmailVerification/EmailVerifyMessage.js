import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { requested_url } from '../../utils/url';
import emailVerificationToken from '../../features/authentication/services/emailVerificationToken';
import { Link, useParams } from 'react-router-dom';
import { asset } from 'helpers';

const EmailVerifyMessage = () => {
    const { token } = useParams();
    const [isValidToken, setIsValidToken] = useState(false);
    const [email, setEmail] = useState('');

    useEffect(async () => {
        const response = await emailVerificationToken(requested_url, token);
        if(response.data.status) {
            setIsValidToken(true);
            setEmail(response.data.email);
        }
    }, []);

    return (
        isValidToken && (
            <div style={{...styles.container, ...styles.wrapper}}>
                <div style={styles.messageContainer}>
                    <h2 style={{fontSize: '35px'}}>Verification email</h2>
                    <p style={{fontSize: '17px'}}>Look in your Inbox and respond to the email verification message sent to</p>
                    <div>
                        <h5 style={{ fontWeight: 'bold' }}>{ email }</h5>
                        <img src={asset('images/icons/check-email.png')} style={{ width: '80px' }} className='logo'/>
                    </div>
                    {/* <h6>HAVE NOT RECEIVED IT? <button style={{ border: 'none', background: 'none', color: '#00A82B' }}>RESEND</button></h6> */}
                    <Link to={'/login'}>
                        <button className='btn btn-primary btn-block'>Back to Login</button>
                    </Link>
                </div>
            </div>
        )
    );
}

const styles = {
    container: {
        width: '100%',
        height: '100vh',
        background: '#F0F0F0',
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    messageContainer: {
        width: '30%',
        padding: '30px',
        background: '#f5f5f5',
        textAlign: 'center',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '20px'
    },
}

export default EmailVerifyMessage;
