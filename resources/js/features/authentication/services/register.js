import axios from "axios";

export const register = async (url, dataForm) => {

    const response = await axios.post(`${url}/auth/register`, dataForm).catch(error => {
        return error.response.data;
    });
    return response;
}
