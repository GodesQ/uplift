import axios from "axios";

export const login = async (dataForm) => {

    const response = await axios.post('http://127.0.0.1:8000/api/auth/login', dataForm).catch(error => {
        return error.response.data;
    });

    return response;
}

export const googleLogin = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/auth/google/login').catch(error => {
        return error.response.data;
    });

    return response;
}
