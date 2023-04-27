import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <label>By continuing you agree to UpLift <Link to=''>Terms of Use.</Link> Read our <Link to=''>Privacy Policy.</Link></label>
        </div>
    );
}

export default Footer;
