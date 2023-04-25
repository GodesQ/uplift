import React from 'react';
import { asset } from 'helpers';
import SearchBar from '../SearchBar';

const LoginHeader = () => {
    return (
        <div className='user-header' style={{background: 'transparent'}}>
            <div className='first-header-container'>
                <img src={asset('images/logos/uplift_logo.png')} className='logo'/>
            </div>
            <div className='second-header-container'></div>
        </div>
    );
}

export default LoginHeader;
