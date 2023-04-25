import React from 'react';
import logo from '../../../public/images/logos/uplift_logo.png';

const Header = () => {
    return (
        <div className='user-header'>
            <div className='first-header-container'>
                <img src={logo} className='logo' />
                <div className='search-form'>

                </div>
            </div>
            <div className='second-header-container'></div>
        </div>
    );
}

export default Header;
