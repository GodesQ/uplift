import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { requested_url } from '../../utils/url';
import emailVerificationToken from '../../features/authentication/services/emailVerificationToken';
import { Link, useParams } from 'react-router-dom';
import { asset } from 'helpers';

const EmailVerificationSuccess = () => {
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
         (
            <div style={{...styles.container, ...styles.wrapper}}>
                <div style={styles.messageContainer}>
                    <div>
                        <img src={asset('images/icons/check.png')} style={{ width: '100px' }} className='logo'/>
                    </div>
                    <h2 style={{fontSize: '35px'}}>Verification Successful</h2>
                    <p style={{fontSize: '17px'}}>Congratulations, your verification was successful! You can now proceed to login."</p>
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

export default EmailVerificationSuccess;
