import axios from "axios";

export const login = async (url, dataForm) => {

    const response = await axios.post(`${url}/auth/login`, dataForm).catch(error => {
        return error.response.data;
    });
    return response;
}

export const googleLogin = async (url) => {
    const response = await axios.post(`${url}/auth/google/login`).catch(error => {
        return error.response.data;
    });

    return response;
}
