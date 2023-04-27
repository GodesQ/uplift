import { googleLogin } from "../services/login";

export default async function useGoogleLogin() {
    return await googleLogin();
}
