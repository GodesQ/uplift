import axios from 'axios';
import React, { useEffect } from 'react';
import useLogout from '../features/authentication/hooks/useLogout';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');


    useEffect(() => {

    }, []);

    const handleLogout = async () => {
        const response = await useLogout(token);
        if(response.status == 200) {
            localStorage.removeItem('token');
            navigate('/login', {replace: true});
        }
    }

    return (
        <div>
            Home
            <button className='btn btn-primary' onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Home;
