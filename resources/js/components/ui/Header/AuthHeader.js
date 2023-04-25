import React from 'react';
import { asset } from 'helpers';
import SearchBar from '../SearchBar';

const AuthHeader = () => {
    return (
        <div className='user-header'>
            <div className='first-header-container'>
                <img src={asset('images/logos/uplift_logo.png')} className='logo'/>
                <SearchBar />
            </div>
            <div className='second-header-container'></div>
        </div>
    );
}

export default AuthHeader;
