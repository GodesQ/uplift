import React from 'react';
import sessionCheck from '../services/sessionCheck';
import { requested_url } from '../utils/url';

async function useCheckSession(token) {

    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        }
    }

    const response = await sessionCheck(requested_url, config);
}

export default useCheckSession;
