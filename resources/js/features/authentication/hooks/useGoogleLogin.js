import { googleLogin } from "../services/login";
import { local_url } from "../../../utils/url";

export default async function useGoogleLogin() {
    return await googleLogin(local_url);
}
