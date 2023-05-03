import axios from "axios";

export default async function emailVerificationToken(url, token) {
    const response = await axios.get(`${url}/auth/check-verification-email-token/${token}`);
    return response;
}
