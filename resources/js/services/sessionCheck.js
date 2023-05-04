import axios from "axios";

const sessionCheck = async (url, config = {}) => {
    const response = await axios.get(`${url}/sessions`, config);
    return response;
}

export default sessionCheck;
