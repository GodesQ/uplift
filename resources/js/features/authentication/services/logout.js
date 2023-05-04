import axios from 'axios';
import React from 'react';

const logout = async (url, config = {}, data = {}) => {
    const response = await axios.post(`${url}/auth/logout`, data, config);
    return response;
}

export default logout;
